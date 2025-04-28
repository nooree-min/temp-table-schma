import fs from 'node:fs'
import { URL } from 'node:url'
import { glob } from 'glob'

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

function isGitHubFileUrl(url: string): boolean {
  const parsedUrl = new URL(url)
  return parsedUrl.hostname === 'github.com' && url.includes('/blob/')
}

async function readLocalFiles(pattern: string): Promise<string> {
  const files = await glob(pattern)
  if (files.length === 0) {
    throw new Error(
      'No files found matching the pattern. Please provide valid file(s).',
    )
  }

  const contents = await Promise.all(
    files.map(async (filePath) => {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`)
      }
      return fs.readFileSync(filePath, 'utf8')
    }),
  )

  return contents.join('\n')
}

async function downloadGitHubRawContent(githubUrl: string): Promise<string> {
  const rawFileUrl = githubUrl
    .replace('github.com', 'raw.githubusercontent.com')
    .replace('/blob', '')
  return await downloadFile(rawFileUrl)
}

async function downloadFile(url: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to download file: ${response.statusText}`)
  }
  const data = await response.text()
  return data
}

export async function getInputContent(inputPath: string): Promise<string> {
  if (!isValidUrl(inputPath)) {
    return await readLocalFiles(inputPath)
  }

  return isGitHubFileUrl(inputPath)
    ? await downloadGitHubRawContent(inputPath)
    : await downloadFile(inputPath)
}

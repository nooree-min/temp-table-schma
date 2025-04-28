import { createClient } from '@/libs/db/server'

export const getGitHubDocFilePaths = async (projectId: string) => {
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('GitHubDocFilePath')
      .select('*')
      .eq('projectId', Number.parseInt(projectId, 10))

    return data || []
  } catch (error) {
    console.error('Error fetching GitHub doc file paths:', error)
    return []
  }
}

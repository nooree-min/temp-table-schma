// NOTE: Linked from `frontend/apps/docs`.
// Please be cautious when renaming, updating, or deleting this file.

import type { SupportedFormat } from './index.js'

const nameToFormatMap: Record<string, SupportedFormat> = {
  'schema.rb': 'schemarb',
  schemafile: 'schemarb',
  'prisma.schema': 'prisma',
  'schema.json': 'tbls',
}

const extensionToFormatMap: Record<string, SupportedFormat> = {
  rb: 'schemarb',
  sql: 'postgres',
  prisma: 'prisma',
}

export const detectFormat = (
  pathOrUrl: string,
): SupportedFormat | undefined => {
  const fileName = pathOrUrl.split('/').pop()?.toLowerCase()

  if (!fileName) {
    return undefined
  }

  if (fileName in nameToFormatMap) {
    return nameToFormatMap[fileName]
  }

  const extension = fileName.split('.').pop()
  if (extension && extension in extensionToFormatMap) {
    return extensionToFormatMap[extension]
  }

  return undefined
}

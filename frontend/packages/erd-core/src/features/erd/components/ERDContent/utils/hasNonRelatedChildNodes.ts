import { NON_RELATED_TABLE_GROUP_NODE_ID } from '@/features/erd/constants'
import type { Node } from '@xyflow/react'

export const hasNonRelatedChildNodes = (nodes: Node[]): boolean => {
  return nodes.some((node) => node.parentId === NON_RELATED_TABLE_GROUP_NODE_ID)
}

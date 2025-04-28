import type { SchemaOverride } from '@liam-hq/db-structure'
import type { InferOutput } from 'valibot'
import type { reviewSchema } from '../prompts/generateReview/reviewSchema'

export type GenerateReviewPayload = {
  pullRequestId: number
  projectId: number
  repositoryId: number
  branchName: string
  owner: string
  name: string
  pullRequestNumber: number
  schemaFile: {
    filename: string
    content: string
  }
  fileChanges: Array<{
    filename: string
    status:
      | 'added'
      | 'modified'
      | 'deleted'
      | 'removed'
      | 'renamed'
      | 'copied'
      | 'changed'
      | 'unchanged'
    changes: number
    patch: string
  }>
}

export type Review = InferOutput<typeof reviewSchema>

export type ReviewResponse = {
  review: Review
  projectId: number
  pullRequestId: number
  repositoryId: number
  branchName: string
  traceId: string
}

export type PostCommentPayload = {
  reviewComment: string
  projectId: number
  pullRequestId: number
  repositoryId: number
  branchName: string
  traceId: string
}

export type GenerateSchemaOverridePayload = {
  overallReviewId: number
}

export type SchemaOverrideResult =
  | {
      createNeeded: true
      override: SchemaOverride
      projectId: number
      pullRequestNumber: number
      branchName: string
      title: string
      traceId: string
      overallReviewId: number
      reasoning?: string
    }
  | {
      createNeeded: false
    }

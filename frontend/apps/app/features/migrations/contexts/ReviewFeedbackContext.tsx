'use client'

import type { Tables } from '@liam-hq/db/supabase/database.types'
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type ReviewFeedback = Tables<'ReviewFeedback'> & {
  suggestionSnippets: Array<{
    id: number
    filename: string
    snippet: string
  }>
}

type ReviewFeedbackContextType = {
  feedbacks: ReviewFeedback[]
  updateFeedback: (feedbackId: number, updates: Partial<ReviewFeedback>) => void
}

const ReviewFeedbackContext = createContext<
  ReviewFeedbackContextType | undefined
>(undefined)

export const useReviewFeedbacks = () => {
  const context = useContext(ReviewFeedbackContext)
  if (!context) {
    throw new Error(
      'useReviewFeedbacks must be used within a ReviewFeedbackProvider',
    )
  }
  return context
}

type ReviewFeedbackProviderProps = {
  initialFeedbacks: ReviewFeedback[]
  children: ReactNode
}

export const ReviewFeedbackProvider = ({
  initialFeedbacks,
  children,
}: ReviewFeedbackProviderProps) => {
  const [feedbacks, setFeedbacks] = useState<ReviewFeedback[]>(initialFeedbacks)

  // Update feedbacks when initialFeedbacks changes
  useEffect(() => {
    setFeedbacks(initialFeedbacks)
  }, [initialFeedbacks])

  const updateFeedback = (
    feedbackId: number,
    updates: Partial<ReviewFeedback>,
  ) => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.map((feedback) =>
        feedback.id === feedbackId ? { ...feedback, ...updates } : feedback,
      ),
    )
  }

  return (
    <ReviewFeedbackContext.Provider value={{ feedbacks, updateFeedback }}>
      {children}
    </ReviewFeedbackContext.Provider>
  )
}

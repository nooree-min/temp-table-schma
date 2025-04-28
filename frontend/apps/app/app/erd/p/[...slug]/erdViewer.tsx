'use client'

import { CookieConsent } from '@/components/CookieConsent'
import type { Schema } from '@liam-hq/db-structure'
import {
  ERDRenderer,
  VersionProvider,
  initSchemaStore,
  versionSchema,
} from '@liam-hq/erd-core'
import { useEffect, useState } from 'react'
import * as v from 'valibot'

type ErrorObject = {
  name: string
  message: string
  instruction?: string
}

type ERDViewerProps = {
  schema: Schema
  errorObjects: ErrorObject[]
  defaultSidebarOpen: boolean
  defaultPanelSizes?: number[]
}

export default function ERDViewer({
  schema,
  errorObjects,
  defaultSidebarOpen,
  defaultPanelSizes = [20, 80],
}: ERDViewerProps) {
  const [isShowCookieConsent, setShowCookieConsent] = useState(false)

  useEffect(() => {
    initSchemaStore(schema)
    setShowCookieConsent(window === window.parent)
  }, [schema])


  const now = '2025-04-17T01:24:00.000Z' // 예시 고정값


  const versionData = {
    version: '0.1.0',
  updatedAt: now,
  date: now,
  displayedOn: 'cli',
  gitHash: process.env.NEXT_PUBLIC_GIT_HASH ?? 'unknown',
  envName: process.env.NEXT_PUBLIC_ENV_NAME ?? 'development',
  isReleasedGitHash: false,
}

  
  let version
  const result = v.safeParse(versionSchema, versionData)
  
  if (!result.success) {
    console.error(
      'versionData validation failed:',
      JSON.stringify(result.issues, null, 2)
    )
    
    version = {
      version: 'unknown',
      updatedAt: '',
      date: '',
      displayedOn: 'cli',
      gitHash: 'unknown',
      envName: 'development',
      isReleasedGitHash: false,
    }
  } else {
    version = result.output
  }


  return (
    <div style={{ height: '100dvh' }}>
      <VersionProvider version={version}>
        <ERDRenderer
          withAppBar
          defaultSidebarOpen={defaultSidebarOpen}
          defaultPanelSizes={defaultPanelSizes}
          errorObjects={errorObjects}
        />
      </VersionProvider>
      {isShowCookieConsent && <CookieConsent />}
    </div>
  )
}

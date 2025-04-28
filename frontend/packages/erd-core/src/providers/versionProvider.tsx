import type { Version } from '@/schemas/version'
import { type FC, type ReactNode, createContext, useContext } from 'react'

interface VersionContextProps {
  version: Version
}

const VersionContext = createContext<VersionContextProps | undefined>(undefined)

export const useVersion = (): VersionContextProps => {
  const context = useContext(VersionContext)
  if (!context) {
    throw new Error('useVersion must be used within a VersionProvider')
  }
  return context
}

export const VersionProvider: FC<{
  version: Version
  children: ReactNode
}> = ({ version, children }) => {
  return (
    <VersionContext.Provider value={{ version }}>
      {children}
    </VersionContext.Provider>
  )
}

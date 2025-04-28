import { describe, expect, it } from 'vitest'
import { detectFormat } from './detectFormat.js'

describe('detectFormat', () => {
  it('should return "schemarb" for schema.rb', () => {
    expect(detectFormat('path/to/schema.rb')).toBe('schemarb')
  })

  it('should return "schemarb" for Schemafile', () => {
    expect(detectFormat('path/to/Schemafile')).toBe('schemarb')
  })

  it('should return "schemarb" for file with .rb extension', () => {
    expect(detectFormat('path/to/file.rb')).toBe('schemarb')
  })

  it('should return "prisma" for schema.prisma', () => {
    expect(detectFormat('path/to/schema.prisma')).toBe('prisma')
  })

  it('should return "prisma" for file with .prisma extension', () => {
    expect(detectFormat('path/to/file.prisma')).toBe('prisma')
  })

  it('should return "postgres" for file with .sql extension', () => {
    expect(detectFormat('path/to/file.sql')).toBe('postgres')
  })

  it('should return undefined for unsupported file extension', () => {
    expect(detectFormat('path/to/file.txt')).toBeUndefined()
  })

  it('should return undefined for empty path', () => {
    expect(detectFormat('')).toBeUndefined()
  })

  it('should return undefined for path without file name', () => {
    expect(detectFormat('path/to/')).toBeUndefined()
  })

  it('should return "tbls" for schema.json', () => {
    expect(detectFormat('path/to/schema.json')).toBe('tbls')
  })
})

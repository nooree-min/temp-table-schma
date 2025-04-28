import type { Schema } from '../../../schema/index.js'

export const mergeSchemas = (target: Schema, source: Schema) => {
  for (const [tableName, table] of Object.entries(source.tables)) {
    target.tables[tableName] = {
      ...target.tables[tableName],
      ...table,
      columns: {
        ...target.tables[tableName]?.columns,
        ...table.columns,
      },
      indexes: {
        ...target.tables[tableName]?.indexes,
        ...table.indexes,
      },
    }
  }

  for (const [relationshipName, relationship] of Object.entries(
    source.relationships,
  )) {
    target.relationships[relationshipName] = relationship
  }
}

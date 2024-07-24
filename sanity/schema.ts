import { type SchemaTypeDefinition } from 'sanity'
import paper from './schema/paper'
import cv_entry from './schema/cv_entry'
import picture from './schema/picture'
import page from './schema/page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [paper, cv_entry, picture, page],
}

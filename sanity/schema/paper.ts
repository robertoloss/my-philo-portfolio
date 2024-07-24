export default {
  name: 'paper',
  type: 'document',
	title: 'Paper',
  fields: [
    {
      name: 'order',
      type: 'number',
      title: 'Order'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'journal',
      type: 'string',
      title: 'Journal'
    },
    {
      name: 'year',
      type: 'number',
      title: 'Year'
    },
    {
      name: 'issueAndPages',
      type: 'string',
      title: 'Issue and page numbers'
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'cover',
      type: 'reference',
      weak: true,
      title: 'Cover',
      to: [{type: 'picture'}]
    },
    {
      name: 'draftAvailable',
      title: 'Draft available?',
      type: 'boolean',
    },
    {
      name: 'published',
      title: 'Published?',
      type: 'boolean',
    },
    {
      name: 'openAccess',
      title: 'Open Access?',
      type: 'boolean',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'draft_pdf',
      title: 'Draft PDF',
      type: 'file',
    }
  ]
}

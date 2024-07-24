export default {
  name: 'cv_entry',
  type: 'document',
	title: 'CV entry',
  fields: [
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{
        type: 'block',
      }]
    },
  ]
}

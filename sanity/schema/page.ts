export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'presentation',
      title: 'Presentation',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: 'Highlighted papers',
      name: 'highlightedPapers',
      type: 'array',
      of: [{
        type: 'reference',
        weak: true,
        title: 'Cover',
        to: [{type: 'paper'}]
      }]
    },
    {
      name: 'myPicture',
      type: 'reference',
      weak: true,
      title: 'My Picture',
      to: [{type: 'picture'}]
    },
  ]
}

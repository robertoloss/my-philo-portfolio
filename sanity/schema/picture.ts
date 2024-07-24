export default {
  name: 'picture',
  type: 'document',
	title: 'Picture',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true // <-- Defaults to false
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
    },
  ]
}

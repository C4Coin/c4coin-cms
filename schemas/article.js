export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url'
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'number',
      description: 'May be used in determining which article appears first'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'logo',
      title: 'Publication Logo',
      type: 'image',
      options: {
        hotspot: false
      },
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
}

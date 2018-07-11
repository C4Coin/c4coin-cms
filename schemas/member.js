export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'number',
      description: 'May be used in determining which member appears first'
    },
    {
      name: 'involvement',
      title: 'Involvement',
      type: 'string',
      options: {
        list: [
          { value: 'founder', title: 'Founder' },
          { value: 'member', title: 'Member' },
          { value: 'advisor', title: 'Advisor' },
        ]
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'linkedInUrl',
      title: 'LinkedIn Profile Url',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Weight',
      name: 'weight',
      by: [
        {field: 'weight', direction: 'desc'}
      ]
    },
    {
      title: 'Release Date, New',
      name: 'releaseDateDesc',
      by: [
        {field: 'releaseDate.utc', direction: 'desc'}
      ]
    },
    {
      title: 'Release Date, Old',
      name: 'releaseDateAsc',
      by: [
        {field: 'releaseDate.utc', direction: 'asc'}
      ]
    }
  ]
}

import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import post from './post'
import article from './article'
import member from './member'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    blockContent,
    post,
    member
  ])
})

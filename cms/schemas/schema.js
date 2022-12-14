// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import route from './documents/route'
import page from './documents/page'
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'


//We import Page sections
import heading from "./objects/heading"
import testSection from './objects/testSection'
import simplePortableText from './objects/simple-portable-text'
import link from './objects/link'
import internalLink from './objects/internal-link'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.    
    page,
    route,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    link,
    internalLink,
    simplePortableText,
    heading,
    
    testSection
  ]),
})

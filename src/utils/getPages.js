import memoizeOne from 'memoize-one'

export default memoizeOne(nodes => nodes.map(({ node }) => node))

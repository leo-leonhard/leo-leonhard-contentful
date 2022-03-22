const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/artwork.js`)

    const result = await graphql(`
      {
        allContentfulArtwork {
          nodes {
            category
            slug
            id
          }
        }
      }
  `)

    console.log(result)

    result.data.allContentfulArtwork.nodes.forEach(node => {
        createPage({
            path: `${node.category}/${node.slug}`,
            component: require.resolve('./src/templates/artwork.js'),
            context: {
                artworkPageId: node.id,
            },
        })
    })
}

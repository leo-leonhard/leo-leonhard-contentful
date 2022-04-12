const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
}
// Create grafik page
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const grafikTemplate = path.resolve(`src/templates/grafik.js`)
    const result = await graphql(`
      {
        allContentfulGrafik {
          nodes {
            category
            slug
            id
          }
        }
      }
  `)

    console.log(result)

    result.data.allContentfulGrafik.nodes.forEach(node => {
        createPage({
            path: `${node.category}/${node.slug}`,
            component: require.resolve('./src/templates/grafik.js'),
            context: {
                grafikId: node.id,
            },
        })
    })
}

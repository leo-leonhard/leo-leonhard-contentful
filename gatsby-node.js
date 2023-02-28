exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allContentfulGrafik {
                nodes {
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                    year
                    title
                    slug
                }
            }
            allContentfulMalerei {
                nodes {
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                    year
                    title
                    slug
                }
            }
        }
    `)
    data.allContentfulGrafik.nodes.forEach((node) => {
        const slug = node.slug
        actions.createPage({
            path: `grafik/${slug}`,
            component: require.resolve(`./src/templates/grafik.js`),
            context: { slug: slug }
        })
    })
    data.allContentfulMalerei.nodes.forEach((node) => {
        const slug = node.slug
        actions.createPage({
            path: `malerei/${slug}`,
            component: require.resolve(`./src/templates/malerei.js`),
            context: { slug: slug }
        })
    })
}

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            aquarelle: allContentfulMalereiImages filter: {
                node_locale: { eq: "de-DE" }
                category: { eq: "Aquarelle" }
            } {
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
    result.data.aquarelle.nodes.forEach((edge) => {
        createPage({
            path: `/malerei/${edge.nodes.slug}`,
            component: path.resolve('malereiTemplate.js'),
            context: {
                slug: edge.nodes.slug
            }
        })
    })
}

/* data.allContentfulGrafik.nodes.forEach((node) => {
        const slug = node.slug
        actions.createPage({
            path: `grafik/${slug}`,
            component: require.resolve(`./src/templates/grafik.js`),
            context: { slug: slug }
        })
    }) */
/* 

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

            
*/

/* 

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allContentfulMalereiImages {
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
    data.allContentfulMalereiImages.nodes.forEach((node) => {
        console.log(node)
        const slug = node.slug
        actions.createPage({
            path: `malerei/${slug}`,
            component: require.resolve(`./src/templates/malerei.js`),
            context: { slug: slug }
        })
    })
}
*/

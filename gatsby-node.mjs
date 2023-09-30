import path from 'path'

export const createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allContentfulGrafik(filter: { node_locale: { eq: "de-DE" } }) {
                nodes {
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                    year
                    title
                    slug
                }
            }
            allContentfulMalereiImages(
                filter: { node_locale: { eq: "de-DE" } }
            ) {
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
    result.data.allContentfulGrafik.nodes.forEach((node) => {
        const slug = node.slug
        actions.createPage({
            path: `grafik/${slug}`,
            component: path.resolve(`./src/templates/grafik.js`),
            context: { slug: slug }
        })
    })
    result.data.allContentfulMalereiImages.nodes.forEach((edge) => {
        createPage({
            path: `/malerei/${edge.slug}`,
            component: path.resolve('malereiTemplate.js'),
            context: {
                slug: edge.slug
            }
        })
    })
}

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

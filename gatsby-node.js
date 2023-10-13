const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const malereiTemplate = path.resolve(`./src/templates/malerei.js`)
    const grafikTemplate = path.resolve(`./src/templates/Grafik.js`)
    const result = await graphql(`
        query {
            grefik: allContentfulGrafikImages(
                filter: { node_locale: { eq: "de-DE" } }
            ) {
                nodes {
                    title
                    slug
                    year
                    category
                    description {
                        childMdx {
                            body
                        }
                    }
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                }
            }
            malerei: allContentfulMalereiImages {
                nodes {
                    title
                    slug
                    year
                    category
                    description {
                        childMdx {
                            body
                        }
                    }
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                }
            }
        }
    `)
    result.data.grafik.nodes.forEach((node) => {
        createPage({
            path: `grafik/${node.slug}`,
            component: grafikTemplate,
            context: { slug: node.slug }
        })
    })
    result.data.malerei.nodes.forEach((node) => {
        createPage({
            path: `malerei/${node.slug}`,
            component: malereiTemplate,
            context: { slug: node.slug }
        })
    })
}

/* exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            grefik: allContentfulGrafikImages(
                filter: { node_locale: { eq: "de-DE" } }
            ) {
                nodes {
                    title
                    slug
                    year
                    category
                    description {
                        childMdx {
                            body
                        }
                    }
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                }
            }
            malerei: allContentfulMalereiImages {
                nodes {
                    title
                    slug
                    year
                    category
                    description {
                        childMdx {
                            body
                        }
                    }
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
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

 */
/* 
import path from 'path'

export const createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allContentfulGrafikImages(
                filter: { node_locale: { eq: "de-DE" } }
            ) {
                nodes {
                    title
                    slug
                    year
                    category
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                }
            }
            allContentfulMalereiImages(
                filter: { node_locale: { eq: "de-DE" } }
            ) {
                nodes {
                    title
                    slug
                    year
                    category
                    image {
                        gatsbyImageData(width: 800, placeholder: BLURRED)
                    }
                }
            }
        }
    `)
    result.data.allContentfulGrafikImages.nodes.forEach((node) => {
        createPage({
            path: `/grafik/${node.slug}`,
            component: path.resolve(`./src/templates/grafik.js`),
            context: { slug: node.slug }
        })
    })
    result.data.allContentfulMalereiImages.nodes.forEach((node) => {
        createPage({
            path: `/malerei/${node.slug}`,
            component: path.resolve('./src/templates/malerei.js'),
            context: {
                slug: node.slug
            }
        })
    })
}
 */

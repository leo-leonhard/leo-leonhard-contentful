import React from 'react'

import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Layout from '../components/Layout'
import Template from '../components/showCaseBox/ShowCaseBoxPage'

import image from '../assets/images/Werke zur deutschen Literatur.jpg'

const alt = 'Werke zur deutschen Literatur'
/* const text = (
    <p>
        In den Schaffensjahren von Leo Leonhard war die Wechselbeziehung
        zwischen Wort und Bild, zwischen Literatur und bildender Kunst von
        größerer Bedeutung als heute. Viele Künstler waren Grenzgänger zwischen
        Bildender Kunst und Literatur. Und so auch Leo Leonhard: Seine
        künstlerische Praxis war vielfach durch die Literatur geprägt. Das Werk
        Georg Büchners stellte einen Schwerpunkt seiner Arbeit dar – er hat sich
        aber auch mit anderen Autoren wie Franz Kafka, Robert Walser, Edgar
        Allen Poe, Ezra Pound, Christian Dietrich Grabbe, Christoph Martin
        Wieland, Georg Christoph Lichtenberg oder Johann Wolfgang von Goethe
        beschäftigt und deren Werke illustriert. Diese Nähe zu der Literatur
        spiegelt sich aber auch in seiner Ölmalerei. Und es war Hugo von
        Hofmannsthal, den er immer wieder gerne zitiert hat: „Die Tiefe muss man
        verstecken. Wo? An der Oberfläche.“
    </p>
)
 */
export default function Werke({ data }) {
    // console.log(data)
    const myNodes = data.allContentfulShowcaseBox.nodes
    return (
        <Layout>
            {myNodes.map((item) => {
                // console.log(item.text)
                return (
                    <section className="standard-layout-width">
                        <div className="showcase-page">
                            <img
                                src={image}
                                alt={alt}
                                className="img-showcase"
                            />
                            <div className="showcase-text-page">
                                <MDXProvider>
                                    <MDXRenderer>
                                        {item.text.childMdx.body}
                                    </MDXRenderer>
                                </MDXProvider>
                            </div>
                        </div>
                    </section>
                )
            })}
        </Layout>
    )
}
export const query = graphql`
    query ShowCaseBoxQuery {
        allContentfulShowcaseBox(
            filter: { slug: { eq: "werke-zur-deutschen-literatur" } }
        ) {
            nodes {
                id
                slug
                header
                text {
                    childMdx {
                        body
                    }
                }
                image {
                    gatsbyImageData(width: 525, placeholder: BLURRED)
                }
            }
        }
    }
`

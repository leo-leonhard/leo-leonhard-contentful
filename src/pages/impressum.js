import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import Layout from '../components/Layout'
import { SEO } from '../components/Seo'

const Impressum = ({ data }) => {
    return (
        <Layout>
            <section className="impressum-container standard-layout-width">
                <div className="impressum-data">
                    <h1>IMPRESSUM</h1>
                    <p>Angaben gemäß § 5 TMG</p>
                    <h3> Nachlaß Leo Leonhard</h3>
                    <p>Florian Leonhard</p>

                    <h3>Kontakt</h3>
                    <p>E-Mail: info@leo-leonhard.de</p>
                    <h3>Website:</h3>
                    <p>E-Mail: hannazrosenfeld@gmail.com</p>
                    <p>E-Mail: web@darayaq.de</p>
                </div>
                <div id="datenschutzerklaerung">
                    <h1>Datenschutzerklärung</h1>
                    {data.daten.nodes.map((item) => {
                        console.log(item.Datenschutzerklaerung)
                        return (
                            <div key={item.id}>
                                <MDXProvider>
                                    <MDXRenderer>
                                        {
                                            item.Datenschutzerklaerung.childMdx
                                                .body
                                        }
                                    </MDXRenderer>
                                </MDXProvider>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query DatenschutzQuery {
        daten: allContentfulDatenschutzerklarung(
            filter: { node_locale: { eq: "de-DE" } }
        ) {
            nodes {
                id
                Datenschutzerklaerung {
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`

export default Impressum

export const Head = () => <SEO />

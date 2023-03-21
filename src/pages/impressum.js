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
                    <MDXProvider>
                        <MDXRenderer>
                            {
                                data.contentfulDatenschutzerklaerung.text
                                    .childMdx.body
                            }
                        </MDXRenderer>
                    </MDXProvider>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query DatenschutzQuery {
        contentfulDatenschutzerklaerung {
            text {
                childMdx {
                    body
                }
            }
        }
    }
`

export default Impressum
export const Head = () => <SEO />

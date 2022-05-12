import React from "react"
import { graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from "../components/Layout"



const Impressum = ({data}) => {
    console.log(data)
    return(
        <Layout>
          <div style={{lineHeight: "0.3", marginBottom: "3em"}}>
            <h1>IMPRESSUM</h1>
            <p>Angaben gemäß § 5 TMG</p>
            <br/>
            <br/>
            <br/>
            <p><b>Nachlaß Leo Leonhard</b></p>
            <p>Florian Leonhard</p>
            <p>Sandstraße 18</p>
            <p>64404 Bickenbach</p>
            <br/>
            <br/>
            <br/>
            <p><b>Kontakt</b></p>
            <p>E-Mail: info@leoleonhard.de</p>
            <br/>
            <br/>
            <br/>
            <p><b>Quelle:</b></p>
            <p>e-recht24.de</p>
          </div>
          <div id="datenschutzerklaerung">
            <hr/>
            <h1>Datenschutzerklärung</h1>
            <br/>
            <MDXProvider>
              <MDXRenderer>
                {data.contentfulDatenschutzerklaerung.text.childMdx.body}
              </MDXRenderer>
            </MDXProvider>
          </div>
          <br/>
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

import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const query = graphql`
{
  artwork: allContentfulArtwork {
    nodes {
      title
      year
      type
      slug
      image {
        url
      }
    }
  }
}
`


const MalereiPage = ({ data }) => {
    return (
        <Layout>
            <h2>DAS ZEICHNERISCHE WERK</h2>
            <hr />
            <div className="d-flex justify-content-between">
            {data.artwork.nodes.map(artwork => (
                <div key={`artwork-${artwork.slug}`} style={{width: "23%"}}>
                    <h3>{artwork.title},{artwork.year}</h3>
                    <h4>{artwork.type}</h4>
                    <img style={{width: "100%"}} src={artwork.image.url}/>
                    </div>
            ))}
            </div>
        </Layout>
    )
}



export default MalereiPage

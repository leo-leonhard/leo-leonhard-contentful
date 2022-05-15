import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'


export default function MalreiTemplate({ data }) {
    const picture = data.allContentfulMalerei.nodes

    return (
        <Layout>
          {picture.map(pic => {
              const image = getImage(pic.image)
              return(
              <div key={pic.slug} className="mb-3">
                <div className="pt-3 d-flex justify-content-between">
                  <h2>DAS ZEICHNERISCHE WERK</h2>
                  <span><Link to="/" style={{textDecoration: "none", color: "#589AAD"}}>&#8592; zurück</Link></span>
                </div>
                  <hr />
                <div className="artwork-detail-container d-flex">
                  <div className="artwork-detail-image-container">
                    <GatsbyImage image={image}/>
                  </div>
                  <div className="artwork-detail-text">
                    <h3>{pic.title}, {pic.year}</h3>
                    <h4>{pic.type}</h4>
                    <p className="pt-4">
                      Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. In mattis consectetur
                      ante. Aliquam ac ex vitae odio viverra mattis
                      nec dictum sem. Duis accumsan, metus ut
                      porttitor tristique, ante orci molestie arcu,
                      id feugiat sem erat vel lorem. Donec pharetra
                      ipsum a ante tempor hendrerit. In eget
                      posuere nunc. Vivamus orci sapien, vehicula
                      vel felis at, hendrerit tempus nibh. Vivamus
                      id tortor convallis, varius nisi vitae,
                      finibus enim. Nullam consequat urna quis
                      tortor lobortis feugiat. Morbi nulla tellus,
                      rhoncus id venenatis facilisis, aliquam at
                      sapien. Proin tempus eget nisi id rutrum. In
                      eget mauris ac tortor vestibulum ultricies
                      sed vel dolor. Phasellus porta dapibus
                      rhoncus. Phasellus porta tristique dolor, sit
                      amet pharetra nisl varius id.
                    </p>
                  </div>
                </div>
                <hr/>
              </div>
          )})}
        </Layout>
    )
}


export const query = graphql`
  query($slug: String!) {
      allContentfulMalerei(filter: { slug: { eq: $slug } }) {
        nodes {
          year
          width
          title
          image {
            gatsbyImageData(width: 600, placeholder: BLURRED)
          }
        }
      }
    }
`

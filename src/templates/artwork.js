import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'



export const query = graphql`
    query ArtworkPageQuery($artworkPageId: String){
      contentfulArtwork(id : { eq: $artworkPageId }){
        title
        type
        year
        slug
        id
        image {
          url
         }
      }
    }
`



const ArtworkTemplate = props => {
    console.log(props)
    return (
        <Layout>
            <div className="pt-3">
            <h2>DAS ZEICHNERISCHE WERK</h2>
                <hr />
                </div>
            <div className="artwork-detail-container d-flex">
                <img src={props.data.contentfulArtwork.image.url} />
                <div className="artwork-detail-text" style={{width: "40%"}}>
                    <h3>{props.data.contentfulArtwork.title}, {props.data.contentfulArtwork.year}</h3>
                    <h4>{props.data.contentfulArtwork.type}</h4>
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
        </Layout>
    )
}



export default ArtworkTemplate

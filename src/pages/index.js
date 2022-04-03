import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import '../styles/index.css'


export const query = graphql`
{
 allContentfulSliderImages {
    nodes {
        id
      sliderImage {
        url
      }
    }
  }
}
`

const IndexPage = ({ data }) => {
    {data.allContentfulSliderImages.nodes.map((image) => {
        console.log(image)
        console.log(image.id)
        console.log(image.sliderImage.url)
        console.log(image.sliderImage.title)

    })}
    return (
        <Layout>
            <div>
                {data.allContentfulSliderImages.nodes.map((image) => (
                    <div key={image.id} style={{height: "89vh", backgroundImage: `url(${image.sliderImage.url})`, backgroundSize: "cover"}}>
                        <p>{image.sliderImage.title}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}



export default IndexPage

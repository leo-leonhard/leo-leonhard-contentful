import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slidy from '../components/Slick'
import '../styles/index.css'


export const query = graphql`
{
 allContentfulSliderImages {
    nodes {
        id
      sliderImage {
        resize(width: 1200) {
          width
          height
          src
        }
        url
        title
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
                    <>
                    <Slidy/>
                    </>
                ))}
            </div>
        </Layout>
    )
}



export default IndexPage

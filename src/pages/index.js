import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Slidy from '../components/Slick'
import IntroText from '../components/IntroText'
import ShowCaseBox from '../components/ShowCaseBox'

import '../styles/index.css'

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <div>
              <Slidy/>
              <IntroText/>
              <ShowCaseBox/>
            </div>
        </Layout>
    )
}



export default IndexPage

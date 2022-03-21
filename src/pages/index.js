import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import indeximage from '../images/index.png'

const IndexPage = () => {
    return (
        <Layout>
            <img src={indeximage} style={{width: "100%"}}/>
        </Layout>
    )
}



export default IndexPage

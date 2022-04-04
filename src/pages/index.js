import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slidy from '../components/Slick'
import '../styles/index.css'

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <div>
                <Slidy/>
            </div>
        </Layout>
    )
}



export default IndexPage

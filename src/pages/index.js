import * as React from 'react'
import { graphql } from 'gatsby'
import NavBar from '../components/NavBar'

import '../styles/index.css'



const IndexPage = () => {
    return (
        <div>
        <NavBar/>
            <div className="index-image-container">
            </div>
        </div>
    )
}



export default IndexPage

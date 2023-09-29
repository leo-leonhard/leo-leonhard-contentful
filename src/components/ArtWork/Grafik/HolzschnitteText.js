import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import '../style.css'

export default function HolzschnitteText({ data }) {
    return (
        <>
            {data.map((elem) => {
                return (
                    <>
                        <h1>{elem.holzschnitteHead}</h1>
                        <div className="paragraph">
                            <MDXProvider>
                                <MDXRenderer>
                                    {elem.holzschnitteHeadDesc.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div>
                    </>
                )
            })}
        </>
    )
}

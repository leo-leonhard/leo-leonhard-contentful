import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import '../style.css'

export default function RadierungenText({ data }) {
    return (
        <>
            {data.map((elem) => {
                return (
                    <>
                        <h1>{elem.radierungenHead}</h1>
                        <div className="paragraph">
                            <MDXProvider>
                                <MDXRenderer>
                                    {elem.radierungenDesc.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div>
                    </>
                )
            })}
        </>
    )
}

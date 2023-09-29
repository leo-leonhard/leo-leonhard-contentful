import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import '../style.css'

export default function AquarelleText({ data }) {
    return (
        <>
            {data.map((item) => {
                return (
                    <>
                        <h1>{item.aquarelleHead}</h1>
                        <div className="paragraph">
                            <MDXProvider>
                                <MDXRenderer>
                                    {item.aquarelleDesc.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div>
                    </>
                )
            })}
        </>
    )
}

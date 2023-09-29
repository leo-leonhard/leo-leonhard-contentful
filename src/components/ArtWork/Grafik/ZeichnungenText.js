import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import '../style.css'

export default function ZeichnungenText({ data }) {
    return (
        <>
            {data.map((elem) => {
                return (
                    <>
                        <h1>{elem.zeichnungenHead}</h1>
                        <div className="paragraph">
                            <MDXProvider>
                                <MDXRenderer>
                                    {elem.zeichnungenHeadDesc.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div>
                    </>
                )
            })}
        </>
    )
}

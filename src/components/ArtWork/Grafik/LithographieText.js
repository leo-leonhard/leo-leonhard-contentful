import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import '../style.css'

export default function Lithographie({ data }) {
    return (
        <>
            {data.map((elem) => {
                return (
                    <>
                        <h1>{elem.lithographieHead}</h1>
                        <div className="paragraph">
                            <MDXProvider>
                                <MDXRenderer>
                                    {elem.lithographieDesc.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div>
                    </>
                )
            })}
        </>
    )
}

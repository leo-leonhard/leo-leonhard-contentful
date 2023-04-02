import React from 'react'

import '../style.css'

export default function OelgemaeldeText({ data }) {
    return (
        <>
            {data.map((elem) => {
                return (
                    <>
                        <h1>{elem.header}</h1>
                        {/* <div className="paragraph">
                            <MDXProvider>
                                <MDXRenderer>
                                    {elem.description.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div> */}
                    </>
                )
            })}
        </>
    )
}

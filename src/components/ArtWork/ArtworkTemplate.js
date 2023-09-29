import React from 'react'
// import { MDXProvider } from '@mdx-js/react'
// import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

// const headingText = {
//     marginBottom: '0.8em',
//     maxWidth: '65ch',
//     fontSize: '2.25rem'
// }

const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8'
}

export default function ArtWorkTemplate({ data }) {
    return (
        <>
            {/*     {data.map((elem) => {
                return (
                    <div key={elem.key}>
                        <h1 className="fett" style={headingText}>
                            {elem.header}
                        </h1>
                        <div style={paragraphStyle}>
                            <MDXProvider>
                                <MDXRenderer>
                                    {elem.description.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div>
                    </div>
                )
            })} */}
        </>
    )
}

/* 
* original 

<>
            {data.map((elem) => {
                return (
                    <div key={elem.key}>
                        <h1 className="fett" style={headingText}>
                            {elem.header}
                        </h1>
                        <div style={paragraphStyle}>
                            <MDXProvider>
                                <MDXRenderer>
                                    {elem.description.childMdx.body}
                                </MDXRenderer>
                            </MDXProvider>
                        </div>
                    </div>
                )
            })}
        </>
*/

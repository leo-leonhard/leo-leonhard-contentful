import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

function IntroText({ introdata }) {
    const headingText = {
        marginBottom: '0.8em',
        maxWidth: '65ch',
        fontSize: '2.25rem'
    }

    const paragraphStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.8'
    }

    return (
        <>
            {introdata.map((intro) => {
                return (
                    <>
                        <div key={intro.id}>
                            <h1 className="fett" style={headingText}>
                                {intro.introtextHome}
                            </h1>
                            <div style={paragraphStyle}>
                                <MDXProvider>
                                    <MDXRenderer>
                                        {intro.content.childMdx.body}
                                    </MDXRenderer>
                                </MDXProvider>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default IntroText

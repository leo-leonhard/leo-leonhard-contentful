import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

function IntroText(props) {
    const introdata = props.introdata

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
                    <div>
                        <div key={intro.key}>
                            <h1 className="fett" style={headingText}>
                                {intro.header}
                            </h1>
                            <div style={paragraphStyle}>
                                <MDXProvider>
                                    <MDXRenderer>
                                        {intro.text.childMdx.body}
                                    </MDXRenderer>
                                </MDXProvider>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default IntroText

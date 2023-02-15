import React from 'react'
import { graphql, Link } from 'gatsby'
// import { getImage, GatsbyImage } from 'gatsby-plugin-image'
// import { MDXProvider } from "@mdx-js/react"
// import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Layout from '../components/Layout'

import portrait from '../assets/images/portrait.jpg'
import auszeichnungen from '../assets/images/Slbst_Öl.jpg'
import s from '../assets/images/s.png'
import p from '../assets/images/p.png'

const Box = ({ title, image, destination }) => {
    return (
        <Link to={destination} style={{ color: '#212529' }}>
            <img src={image} alt="text" />
            <div className="mt-1">
                <button className="btn btn-stationen">{title}</button>
            </div>
        </Link>
    )
}

const lebenslaufStationen = [
    {
        title: 'Lebensstationen',
        destination: '/lebensstationen',
        image: ` ${s}`
    },
    {
        title: 'Nachruf',
        destination: '/test',
        image: `${portrait}`
    },
    {
        title: 'Auszeichnungen',
        destination: '/auszeichnungen',
        image: `${p}`
    },
    {
        title: 'Ausstellungen',
        destination: '/ausstellungen',
        image: `${auszeichnungen}`
    }
]

const LebenslaufPage = ({ data }) => (
    <Layout>
        <section style={{ background: '#F8F3EA', padding: '1em 2em 3em 2em' }}>
            <PageBanner image={data.allContentfulPageBanner.nodes} />
            <IntroText introdata={data.allContentfulIntroText.nodes} />
        </section>

        <section className="gallery-lenbenslauf">
            {lebenslaufStationen.map((item) => {
                return (
                    <Box
                        key={item.title}
                        title={item.title}
                        destination={item.destination}
                        image={item.image}
                    />
                )
            })}
        </section>
    </Layout>
)

export const query = graphql`
    query getLebenslaufContent {
        allContentfulIntroText(filter: { slug: { eq: "lebenslauf" } }) {
            nodes {
                id
                slug
                header
                page
                text {
                    childMdx {
                        body
                    }
                }
            }
        }
        allContentfulPageBanner(filter: { slug: { eq: "lebenslauf" } }) {
            nodes {
                slug
                image {
                    id
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
        allContentfulLebenslauf(sort: { fields: year, order: ASC }) {
            nodes {
                year
                event
            }
        }
        allContentfulAuszeichnung(sort: { fields: year, order: ASC }) {
            nodes {
                year
                auszeichnungen {
                    childMdx {
                        body
                    }
                }
            }
        }
        allContentfulEinzelausstellungen(
            sort: { fields: zeitraum, order: ASC }
        ) {
            nodes {
                zeitraum
                height
                ausstellungen {
                    year
                    venues {
                        name
                    }
                }
            }
        }
        allContentfulGruppenausstellungen(
            sort: { fields: zeitraum, order: ASC }
        ) {
            nodes {
                zeitraum
                height
                gruppenausstellung {
                    year
                    venues {
                        name
                    }
                }
            }
        }
    }
`

export default LebenslaufPage

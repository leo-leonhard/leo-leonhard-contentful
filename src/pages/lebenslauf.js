import React from 'react'
import { graphql, Link } from 'gatsby'

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
            <img src={image} alt={title} />
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
        <section
            style={{ background: '#F8F3EA', padding: '1em 2em 3em 2em' }}
            className="standard-layout-width"
        >
            <PageBanner image={data.allContentfulPageBanner.nodes} />
            <IntroText introdata={data.allContentfulIntroText.nodes} />

            <div className="gallery-lenbenslauf ">
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
            </div>
        </section>
    </Layout>
)

export const query = graphql`
    query getLebenslaufContent {
        allContentfulPageBanner(filter: { slug: { eq: "lebenslauf" } }) {
            nodes {
                image {
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
        allContentfulIntroText(filter: { slug: { eq: "lebenslauf" } }) {
            nodes {
                header
                page
                text {
                    childMdx {
                        body
                    }
                }
            }
        }
    }
`

export default LebenslaufPage

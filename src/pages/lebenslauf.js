import React from 'react'
import { graphql, Link } from 'gatsby'

import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Layout from '../components/Layout'
import { SEO } from '../components/Seo'

import nachruf from '../assets/images/portrait.jpg'
import auszeichnungen from '../assets/images/Slbst_Öl.jpg'
import lebensstationen from '../assets/images/s.png'
import ausstellungen from '../assets/images/p.png'

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
        image: ` ${lebensstationen}`
    },
    {
        title: 'Nachruf',
        destination: '/nachruf',
        image: `${nachruf}`
    },
    {
        title: 'Auszeichnungen',
        destination: '/auszeichnungen',
        image: `${auszeichnungen}`
    },
    {
        title: 'Ausstellungen',
        destination: '/ausstellungen',
        image: `${ausstellungen}`
    }
]

const LebenslaufPage = ({ data }) => (
    <Layout>
        <section
            style={{ background: '#F8F3EA', padding: '1em 2em 3em 2em' }}
            className="standard-layout-width"
        >
            <PageBanner image={data.introLebenslauf.nodes} />
            <IntroText introdata={data.introLebenslauf.nodes} />

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
        introLebenslauf: allContentfulIntroText(
            filter: {
                node_locale: { eq: "de-DE" }
                slug: { eq: "lebenslauf-ueber" }
            }
        ) {
            nodes {
                introtextHome
                id
                content {
                    childMdx {
                        body
                    }
                }
                image {
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
    }
`

export default LebenslaufPage
export const Head = () => <SEO />

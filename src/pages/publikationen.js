import React from 'react'
import { graphql, Link } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import { SEO } from '../components/Seo'

import verzeichnisImage from '../assets/images/Verzeichnis_image.jpg'

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

const verzeichnisKataloge = [
    {
        title: 'Verzeichnis der Bücher, Kataloge und Zeitschriften mit Abbildungen der Arbeiten Leo Leonhards',
        destination: '/verzeichnis',
        image: verzeichnisImage
    }
]

// TODO:
// books are not being well distributed

const PublikationenPage = ({ data }) => {
    // const books = data.allContentfulBook.nodes
    return (
        <Layout>
            <section className="standard-layout-width">
                <div className="d-flex flex-column">
                    <PageBanner image={data.intro.nodes} />
                    <IntroText introdata={data.intro.nodes} />
                </div>
                {/* 
                <div>
                    <h1 className="m-2">Bücher</h1>
                    <div
                        className="d-flex align-items-baseline flex-wrap justify-content-between"
                        style={{ width: '100%' }}
                    >
                        {books.map((book) => {
                            const image = getImage(book.coverImage)
                            return (
                                <div
                                    key={book.id}
                                    className="d-flex flex-column"
                                    style={{
                                        width: '13em',
                                        marginRight: '2em',
                                        marginBottom: '2em'
                                    }}
                                >
                                    <div className="d-flex flex-column">
                                        <GatsbyImage
                                            style={{ maxWidth: '100%' }}
                                            image={image}
                                        />
                                        <div
                                            className="mt-2 d-flex flex-column"
                                            style={{ maxWidth: '100%' }}
                                        >
                                            <p
                                                className="fett"
                                                style={{
                                                    margin: '0.1em 0',
                                                    fontSize: '0.8em'
                                                }}
                                            >
                                                {book.year}
                                            </p>
                                            <p
                                                className="fett"
                                                style={{
                                                    margin: '0.3em 0',
                                                    color: '#5291A3',
                                                    fontSize: '0.8em'
                                                }}
                                            >
                                                {book.title}
                                            </p>
                                            <p
                                                style={{
                                                    margin: '0.2em 0',
                                                    fontSize: '0.8em'
                                                }}
                                            >
                                                {book.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> 
                */}

                <hr />

                <div className="publikationen-container">
                    {verzeichnisKataloge.map((item) => {
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
}

export const query = graphql`
    query getPublikationenContent {
        intro: allContentfulIntroText(
            filter: {
                node_locale: { eq: "de-DE" }
                slug: { eq: "leo-leonhard-als-buchillustrator" }
            }
        ) {
            nodes {
                slug
                introtextHome
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

        books: allContentfulBooks(
            filter: { node_locale: { eq: "de-DE" } }
            sort: { fields: year, order: ASC }
        ) {
            nodes {
                title
                year
                slug
                subtitle
                coverImage {
                    url
                    title
                    gatsbyImageData(
                        width: 230
                        placeholder: BLURRED
                        layout: CONSTRAINED
                    )
                }
            }
        }
    }
`

export default PublikationenPage
export const Head = () => <SEO />

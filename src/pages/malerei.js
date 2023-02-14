import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import IntroText from '../components/IntroText'
import Oelgemaelde from '../components/ArtWork/Malerei/Oelgemaelde'
import Aquarelle from '../components/ArtWork/Malerei/Aquarelle'

const MalereiPage = ({ data }) => (
    <Layout>
        <PageBanner image={data.allContentfulPageBanner.nodes} />

        <IntroText introdata={data.allContentfulIntroText.nodes} />

        <div className="mt-5 mb-5">
            <hr />
        </div>

        <div id="oelgemaelde">
            <h2>Ölgemälde</h2>
            <Oelgemaelde />
        </div>

        <div className="mt-5 mb-5">
            <hr />
        </div>

        <div id="aquarelle">
            <h2>Aquarelle</h2>
            <div className="mt-3 mb-4">
                <h3>Eine lebensbegleitende künstlerische Praxis</h3>
                <p>
                    Das Aquarell als eine lebensbegleitende künstlerische
                    Praxis: Auf allen seinen zahlreichen Reisen auch mit der
                    Familie aquarellierte Leo Leonhard. Immer hatte er seine
                    große Aquarellmappe dabei – so entstanden farbenprächtige,
                    sehr detailreiche Aquarelle, deren großes Format auffällig
                    ist. Immer wieder waren diese Aquarelle in Ausstellungen zu
                    sehen. Sie verbinden eine sehr genaue Darstellung mit einer
                    leichten, duftigen Koloratur – und waren daher schon in
                    ihrer Entstehungszeit beim Publikum sehr beliebt. Ein 1985
                    entstandener Video-Film von Dieter Zeitz, „Neulich in
                    Neutsch. Leo at work“ zeigt Leo Leonhard beim
                    Landschaft-Aquarellieren in Neutsch, einem Ortsteil der
                    Gemeinde Modautal im Odenwald. Hier zeigt sich auf schönste
                    Weise, wie der Künstler Akribie mit hintersinnigem Humor und
                    Witz mit Ernsthaftigkeit verbindet.
                </p>
            </div>

            <Aquarelle />
        </div>
    </Layout>
)

export const query = graphql`
    query getMalereiContent {
        allContentfulPageBanner(filter: { slug: { eq: "malerei" } }) {
            nodes {
                slug
                image {
                    id
                    gatsbyImageData(width: 1200, placeholder: BLURRED)
                }
            }
        }
        allContentfulIntroText(filter: { slug: { eq: "malerei" } }) {
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
    }
`

export default MalereiPage

// TODO:check if is OK this endpoint is available here

const MAILCHIMP_ENDPOINT =
    'https://leoleonhard.us18.list-manage.com/subscribe/post?u=e1a5dbbbb0ea0b799aef63312&amp;id=993dc3fe42'

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `Leo Leonhard`,
        description: 'Leo-Leonhard, Malerei und Grafik',
        image: 'src/assets/images/portrait.jpg',
        siteUrl: `https://www.leo-leonard.de`,
        nameGoogle: 'google-site-verification',
        contentGoogle: 'Ubj3GNHWtTOb0byiLLZWeWYW67IdMFYz-v3dhz9KU4Y'
    },
    plugins: [
        `gatsby-plugin-netlify`,
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: MAILCHIMP_ENDPOINT,
                timeout: 3500 // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'GJPxShkkbSEdwZDeEF7vfFf185KpMwEky04StTCn0TM',
                spaceId: '38vyszegfq6y',
                personalAccessToken:
                    'CFPAT-vL-1Ufg4yHotCJicQwFnSoKV_5mG3wqkulKzC2uaZBA'
            }
        },
        'gatsby-plugin-image',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/assets/images/'
            },
            __key: 'images'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/'
            },
            __key: 'pages'
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/logo/favicon.svg',
                name: `Leo-Leonhard`,
                short_name: `Leonhard`,
                start_url: `/`,
                display: `standalone`
            }
        }
    ]
}

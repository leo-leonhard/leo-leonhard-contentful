require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `Leo Leonhard`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint:
                    'https://leoleonhard.us18.list-manage.com/subscribe/post?u=e1a5dbbbb0ea0b799aef63312&amp;id=993dc3fe42', // string; add your MC list endpoint here; see instructions below
                timeout: 3500 // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            }
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'Xr9zQyo4ocpCalDZxpBrRGCLWrMzbzGd67OaMcsh8Bk',
                spaceId: 'w17q9nasxzwi',
                personalAccessToken:
                    'CFPAT-Hj2lN0UWNFYYhe2-pA0d1eGg2eWKb-TevlWsGdMfF-g'
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
        }
    ]
}

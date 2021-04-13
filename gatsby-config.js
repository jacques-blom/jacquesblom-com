module.exports = {
    siteMetadata: {
        title: "Jacques Blom",
        description:
            "I'm on a mission to help devs build their skills through my tutorials, advice, and more.",
        siteUrl: "https://jacquesblom.com",
        twitterUsername: "jacques_codes",
        image: "/og.png",
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/favicon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: ["G-NZE7W0741G"],
            },
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                id: 2333512,
                sv: 6,
            },
        },
    ],
}

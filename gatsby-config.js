module.exports = {
    siteMetadata: {
        title: "Jacques Blom",
        siteUrl: "https://jacquesblom.com",
        twitterUsername: "jacques_codes",
    },
    plugins: [
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        // {
        //     resolve: "gatsby-plugin-manifest",
        //     options: {
        //         // TODO: Favicon
        //         icon: "src/images/icon.png",
        //     },
        // },
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
    ],
}

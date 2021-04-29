const path = require("path");
const { title, keywords, description, author, defaultLang, trackingId } = require("./config/site");

module.exports = {
  siteMetadata: {
    title,
    keywords,
    description,
    author,
  },
  plugins: [
    // {
    // resolve: `gatsby-source-vimeo`,
    // options: {
    //   clientID: 'e899a7ef4cf50fd0c3a8781bdda836e7672a5834',
    //   clientSecret: 'KYEWxbqdXVgh/9yJEPrItiJEIDOtGB+lAe4hLDO+nyMYbRlo9/foua7P8yZWuBfERFxuH0lGgiU1pb7SDpipTIxI3CA+Vkqk7OAN0fnq2xyAdZwpYP20B3OfYSxWZUVx',
    //   userID: '138549338',
    //   // searchQuery: '',
    //   transformer (video) {
    //     // Transform the video data [OPTIONAL]
    //     // i.e. Add extra fields or alter existing field
    //     video.newField = 'value'
    //     return video
    //   }
    // },
    // },
    {
      resolve: 'gatsby-source-vimeo-all',
      options: {
        clientId: 'e899a7ef4cf50fd0c3a8781bdda836e7672a5834',
        clientSecret: 'KYEWxbqdXVgh/9yJEPrItiJEIDOtGB+lAe4hLDO+nyMYbRlo9/foua7P8yZWuBfERFxuH0lGgiU1pb7SDpipTIxI3CA+Vkqk7OAN0fnq2xyAdZwpYP20B3OfYSxWZUVx',
        accessToken: 'eb826806c756891beb7d50d1869caabe'
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "Agency",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#fed136",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "core.scss";`,
        includePaths: [path.resolve(__dirname, "src/style")],
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Droid Sans",
            file: "https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap",
          },
          {
            name: "Montserrat",
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
          },
          {
            name: "Kaushan Script",
            file: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
          },
          {
            name: "Roboto Slab",
            file: "https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/content/"],
      },
    },
  ],
};

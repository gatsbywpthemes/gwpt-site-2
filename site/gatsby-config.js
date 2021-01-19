const config = require('./config')

module.exports = {
  siteMetadata: {
    title: 'Gatsby theme WordPress Starter Demo',
    description: 'Gatsby starter site for Gatsby Theme Wordpress Theme.',
    author: '@alexadark',
    wordPressUrl: config.wordpressUrl,
    siteUrl: config.siteUrl,
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/gatsby_wp',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: '@gatsbywpthemes/gatsby-theme-blog-data',
      options: {
        ...config,
        pathPrefix:
          process.env.NODE_ENV === 'development' ? '' : config.pathPrefix,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: false,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
      },
    },
    //   {
    //     resolve: `gatsby-plugin-cookiehub-banner`,
    //     options: {
    //         // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
    //         cookieHubId: "YOUR_COOKIEHUB_BANNER_ID",
    //         // Optional parameter (default false) - Use new v2 API.
    //         cookieHubV2Api: false,
    //         // Categories configured with CookieHub
    //         categories: [
    //         {
    //             categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
    //             cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled' // Your custom cookie name
    //         },
    //         {
    //             categoryName: 'marketing',
    //             cookieName: 'marketing-enabled'
    //         }
    //         ]
    //     }
    // },
    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wp-seo',
      options: {
        siteUrl: config.siteUrl,
        pathPrefix: config.pathPrefix,
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -50,
        stripHash: true,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },

    {
      resolve: '@gatsbywpthemes/gatsby-plugin-wpcf7',
      options: {
        wordPressUrl: config.wordPressUrl,
      },
    },
    // {
    //   resolve: `gatsby-plugin-wordpress-lightbox`,
    //   options: {
    //     ...(options.lightboxOptions || {}),
    //   },
    // },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://gmail.us20.list-manage.com/subscribe/post?u=264367957087f30a2e5e30279&amp;id=338936df19',
      },
    },
  ],
}

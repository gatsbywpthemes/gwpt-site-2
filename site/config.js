const config = {
  wordPressUrl: process.env.GATSBY_WP_URL,
  siteUrl: 'https://gatsbywpthemes.com/',
  logo: 'gatsby-wp-themes-logo-white.svg',
  menuName: 'main',
  // addWordPressComments: 1,
  ga4TrackingId: 'G-SYKETXV5ML',
  googleTagManagerId: 'GTM-TQDF4VK',
  // addSiteMap: false,
  // siteMapOptions: {},

  skipTitle: 'all',
  layoutWidth: {
    page: 'l',
    post: 'l',
    archive: 'l',
  },
  sidebarWidgets: [
    // 'Categories',
    // 'RecentPosts',
    // 'Tags',
    // 'SocialFollow',
    'Newsletter',
  ],
  slideMenuWidgets: ['Newsletter'],
  archiveSidebar: 'right',

  // gaTrackingId: 0,
  // googleTagManagerId: 0,
  // addSiteMap: false,
  // siteMapOptions: {},
  favicon: 'static/icon.svg',
  seoWithYoast: true,
}

module.exports = config

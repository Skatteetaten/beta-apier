// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Beta-APIer',
  tagline: '',
  url: 'https://skatteetaten.github.io',
  baseUrl: '/beta-apier/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  plugins: [
    'docusaurus-plugin-sass',
    ['@docusaurus/plugin-client-redirects', { fromExtensions: ['html', 'htm'] }]
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Skatteetaten', // Usually your GitHub org/user name.
  projectName: 'beta-apier', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'nb',
    locales: ['nb']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;

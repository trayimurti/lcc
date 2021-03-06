// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LCC',
  tagline: 'Learn . Code . Contribute',
  url: 'https://trayimurti.github.io',
  baseUrl: '/lcc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'trayimurti', // Usually your GitHub org/user name.
  projectName: 'lcc', // Usually your repo name.
  stylesheets: [
  {
    href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
    type: 'text/css',
    integrity:
      'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
    crossorigin: 'anonymous',
  },
  ],
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'code',
        path: 'code',
        routeBasePath: 'code',
        remarkPlugins: [math],
        rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        editUrl: 'https://github.com/trayimurti/lcc/tree/main/',
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'UA-220107955-1',
          anonymizeIP: true,
        },
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/trayimurti/lcc/tree/main/',
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/trayimurti/lcc/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{
        name: 'keywords', 
        content: 'coding, ioi, data-structure, algorithms, blog'
      },{
        name: 'robots',
        content: 'noindex'
      }],
      navbar: {
        title: 'LCC',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Learn',
          },
          {
            to: '/code/intro',
            label: 'Code',
            position: 'left',
            activeBaseRegex: `/code/`,
          },
          {
            to: '/contribute',
            label: 'Contribute',
            position: 'left',
            activeBaseRegex: `/contribute/`,
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/trayimurti/lcc',
            className: 'header-github-logo',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright ?? ${new Date().getFullYear()} LCC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
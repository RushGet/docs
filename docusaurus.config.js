// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RushGet',
  tagline: 'RushGet 是一套协助用户完成 docker 镜像和 release 同步与下载的解决方案',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rg.newbe.pro',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RushGet', // Usually your GitHub org/user name.
  projectName: 'RushGet', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      "zh-Hans": {
        htmlLang: '简体中文',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      en: {
        htmlLang: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/RushGet/docs/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'RushGet',
        logo: {
          alt: 'RushGet',
          src: 'img/logo_long.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '🐤项目简介',
          },
          {
            href: 'https://jq.qq.com/?_wv=1027&k=AIyL6bLE',
            label: 'QQ Group 610394020',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/RushGet/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '🐤项目简介',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'QQ Group',
                href: 'https://jq.qq.com/?_wv=1027&k=AIyL6bLE',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'RushGet',
                href: 'https://github.com/RushGet/RushGet',
              },
              {
                label: 'Shuttle',
                href: 'https://github.com/RushGet/Shuttle',
              },
              {
                label: 'TurboHub',
                href: 'https://github.com/RushGet/TurboHub',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RushGet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RushGet. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const title = "CookieBook";
const description = "CookieBook - Personal Documentation";
const url =
  process.env.NODE_ENV !== "development"
    ? "https://nekomamoushi.github.io"
    : "http://localhost:3000";

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CookieBook",
  tagline: "Cookies are cool",
  url: url,
  baseUrl: "/cookiebook/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nekomamoushi", // Usually your GitHub org/user name.
  projectName: "cookiebook", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      metadatas: [
        { name: "description", content: description },
        { name: "og:title", content: title },
        { name: "og:type", content: "website" },
        { name: "og:description", content: description },
      ],
      navbar: {
        title: "CookieBook",
        logo: {
          alt: "My Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "<Tutorial />",
          },
          {
            href: "https://github.com/nekomamoushi/cookiebook",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} CookieBook. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Victor Lucachi - Works and writings",
  siteDescription: "An assortment of works and writings.",
  siteUrl: 'https://www.victorlucachi.ro',
  host: "0.0.0.0",
  titleTemplate: "%s // Victor Lucachi",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "showcase/**/*.md",
        typeName: "Post",
        resolveAbsolutePaths: true
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-11126444-6'
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};

import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Ａaron Zomback',
    siteTitle: 'Aaron Zomback',
    siteUrl: 'https://www.yourdomain.tld',
    siteTitleAlt: 'Minimal Blog - @lekoarts/gatsby-theme-minimal-blog',
    siteHeadline: 'Minimal Blog - Gatsby Theme from @lekoarts',
    siteDescription: 'Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and line highlighting.',
    siteLanguage: 'en',
    siteImage: '/banner.jpg',
    author: '@lekoarts_de'
  },
  plugins: ['gatsby-plugin-netlify-cms', 'gatsby-plugin-postcss', 'gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png'
    }
  },
  {
    resolve: 'gatsby-plugin-prettier-eslint',
    options: {
      prettier: {
        patterns: [
          // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
          '**/*.{css,scss,less}',
          '**/*.{json,json5}',
          '**/*.{graphql}',
          '**/*.{md,mdx}',
          '**/*.{html}',
          '**/*.{yaml,yml}'
        ]
      },
      eslint: {
        patterns: '**/*.{js,jsx,ts,tsx}',
        customOptions: {
          fix: true,
          cache: true
        }
      }
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'dailies',
      path: `${__dirname}/src/content/dailies`
    }
  },
  'gatsby-transformer-remark', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/'
    },
    __key: 'images'
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/'
    },
    __key: 'pages'
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.mdx', 'md']
    }
  }
  ]
}

export default config

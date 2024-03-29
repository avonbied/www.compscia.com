import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Computer Science Association`,
		description: ``,
		author: `@avonbied`,
		siteUrl: 'https://hccdit.github.io',
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-tsconfig-paths',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `images`,
				path: `${__dirname}/static/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `static/images/logo-transparent.png`,
			},
		},
		{
			resolve: 'gatsby-plugin-typescript',
			options: {
				isTSX: true,
				jsxPragma: 'jsx',
				allExtensions: true
			},
		},
	],
}

export default config;
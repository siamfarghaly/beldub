/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path')
exports.createPages = async ({ graphql,  actions }) => {
  const {data} = await graphql (`
    query pagesQuery {
      allStrapiSoundsystem {
        nodes {
          slug
        }
      }
      allStrapiPost {
        nodes {
          slug
        }
      }
    }
  `)
  
  data.allStrapiSoundsystem.nodes.forEach(sound => (
    actions.createPage({
      path:'/soundsystems/' + sound.slug,
      component: path.resolve('./src/templates/sound-page.js'),
      context: { slug: sound.slug}
    })

  ))
  data.allStrapiPost.nodes.forEach(blogPost => (
    actions.createPage({
      path:'/blog/' + blogPost.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: { slug: blogPost.slug}
    })

  ))
}
exports.onCreateWebpackConfig = ({ stage, rules, loaders, actions }) => {
  switch (stage) {
    case 'build-html':
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-leaflet/,
              use: [loaders.null()]
            }
          ]
        }
      });
      break;
  }
};

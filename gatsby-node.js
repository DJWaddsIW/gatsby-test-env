const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `query {
          customApi {
            shops {
              id
              name
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const shops = result.data.customApi.shops;
        shops.forEach((shop) => {
          const slug = `/shop/${shop.name}`
          createPage({
            path: slug,
            component: path.resolve('src/templates/Shop/index.js'),
            context: {
              id: shop.id,
              name: shop.name
            },
          })
        })
      })
    )
  })
}
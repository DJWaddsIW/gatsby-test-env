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
        `
        query {
          dataApi {
            listShops {
              items {
                id
                name
                logo
                terminals
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result, 'dfghjfghjfghjfghjfghjdfghdfghfghjfghjdrfghjfghjfghjghjkfghjkfghjk')
          reject(result.errors)
        }
        const shops = result.data.dataApi.listShops.items;
        shops.forEach((shop) => {
          const slug = `/shop/${shop.name}`
          createPage({
            path: slug,
            component: path.resolve('src/templates/Shop/index.js'),
            context: {
              id: shop.id,
            },
          })
        })
      })
    )
  })
}
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

// export const query = graphql`query getShopById($id: ID!) {
//   dataApi {
//     getShop(id: $id) {
//       id
//       name
//       logo
//     }
//   }
// }`;

class Shop extends React.Component {
  
  state = {
    shop: this.props.pageContext
  }
  render() {
  const {shop} = this.state;
  return <Layout>
      <SEO title={`${shop.name}`} />
      <h1>{shop.name}</h1>
    </Layout>
  }
} 

export default Shop
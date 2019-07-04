import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"

export const query = graphql`query getShopById($id: ID!) {
  dataApi {
    getShop(id: $id) {
      id
      name
      logo
      terminals
    }
  }
}`;

class Shop extends React.Component {
  
  state = {
    shop: this.props.data.dataApi.getShop,
  }
  render() {
  const {shop} = this.state;
  return <Layout>
      {console.log(shop)}
      <SEO title={`${shop.name}`} />
      <h1>{shop.name}</h1>
      <h4> Terminals </h4>
      {shop.terminals.map(terminal => {
        return <li key={terminal}>Terminal {terminal}</li>  
      })}
    </Layout>
  }
}

export default Shop
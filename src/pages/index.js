import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Shops from '../components/Shops'

export const query = graphql`query getShops {
  dataApi {
    listShops(limit: 200000, nextToken: null) {
      items {
        id
        name
        logo
        terminals
      }
    }
  }
}`;

class IndexPage extends React.Component {
  state = {
    shops: this.props.data.dataApi.listShops.items,
  }
  render(){
    const { shops, shopIndexer } = this.state
    const { toggleShopList, nameChecker} = this;
    return (
      <Layout>
        <SEO title="Home" />
        <Shops shops={shops} />
        <Link to="/page-2/">Go to page 2</Link>
        <button onClick={nameChecker}>check names</button>
      </Layout>
    )
  }
}

export default IndexPage

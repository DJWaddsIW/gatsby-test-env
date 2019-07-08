import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Shops from '../components/Shops'

export const query = graphql`query {
  customApi {
    shops {
      id
      name
    }
  }
}`;

class IndexPage extends React.Component {
  state = {
    shops: this.props.data.customApi.shops,
  }
  render(){
    const { shops } = this.state
    return (
      <Layout>
        <SEO title="Home" />
        <Shops shops={shops} />
      </Layout>
    )
  }
}

export default IndexPage

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Shops shops={data.dataApi.listShops.items} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
) 

export default IndexPage

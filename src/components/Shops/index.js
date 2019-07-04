import { Link } from "gatsby"
import React from "react"

const Shops = ({shops}) => (
  <div>
    <div>
      {shops.map(shop => {
        return <div key={shop.id}>
          <Link to={`/shop/${shop.name}`}>{shop.name}</Link>
        </div>
      })}
    </div>
  </div>
)

export default Shops;
import React from 'react'
import Product from './Product'
import './styles.css'

const ProductList = ({products,passData}) => {

        
  return (
    <div id="list" className="m-x-9">
    {/* {console.log("product list: ", products)} */}
    {
        
        products.map((product) => (
            <Product SKU={product.sku} name={product.name} price={product.price} productSpecific={product.product_specific} key={product.id} id={product.id} passData={passData}/>
        ))

    }
    
    </div>
  )
}

export default ProductList
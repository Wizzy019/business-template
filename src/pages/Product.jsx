import React from 'react'
import ProductCard from '../components/Product/ProductCard'

function Product() {
     
    const product = {
        id: 1,
        name: "Sample Product",
        price: "$19.99",
        image_url: "https://via.placeholder.com/150",
        actionLabel: "Buy"
    }
    

  return (
    <div className='min-h-screen'>
      <ProductCard product={product} />
    </div>
  )
}

export default Product
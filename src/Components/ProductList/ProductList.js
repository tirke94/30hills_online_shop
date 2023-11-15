import Product from '../Product/Product'
import React from 'react'
import './ProductList.css'

const ProductList = ({ products }) => {
    return (
        <div className='productsSection'>
            {products.map(item => <Product key={item.id} productName={item.name} productPrice={item.price} productImg={item.images ? item.images[0] : undefined} />)}
        </div>
    )
}

export default ProductList
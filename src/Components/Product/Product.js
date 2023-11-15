import React from 'react'
import './Product.css'

const Product = ({ productImg, productName, productPrice }) => {
    return (
        <div className='card'>
            {productImg && <img src={productImg} className='productImg' />}
            <h2 className='productName'>{productName}</h2>
            <p className='productPrice'>{`$${productPrice}`}</p>
            <button className='addToCart'>Add To Cart</button>
        </div>
    )
}

export default Product
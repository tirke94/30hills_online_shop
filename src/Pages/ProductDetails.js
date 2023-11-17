import React, { useState } from "react"
import data from "../data.json"
import { useParams } from "react-router-dom"
import './ProductDetails.css'

const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState(
        data.products.data.items.find((el) => el.id === params.productId),
    )

    return (<div className="productDetails">
        <div className="productDetailsName">
            <p><span className="detailsSpan">Name: </span>{product.name}</p>
        </div>
        <div className="productDetailsContent">
            <p><span className="detailsSpan">Description: </span>{product.description}</p>
        </div>
        <div>
            <img className="productDetailsImg" src={product.images[0]} alt="" />
        </div>
        <div className="productDetailsContent">
            <p>{product.keywords}</p>
        </div>
        <div className="productDetailsContent">
            <p><span className="detailsSpan">Price: </span>${product.price}</p>
        </div>
    </div>
    )
}

export default ProductDetails

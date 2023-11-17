import React from "react"
import "./Product.css"
import { randomizeItem } from "../../Utils/helpers"
import { Link } from "react-router-dom"

const Product = ({ product, onAddItemToCartHandler }) => {
    const addToCartHandler = () => {
        onAddItemToCartHandler(product, 1)
    }

    return (
        <div className="card">
            {product.images && (
                <img
                    src={product.images[randomizeItem()]}
                    className="productImg"
                    alt=""
                />
            )}
            <Link to={`product/${product.id}`} className="anchor">
                <h2 className="productName">{product.name}</h2>
            </Link>
            <div className="priceSection">
                <p className="productPrice">{`$${product.price}`}</p>
                <button className="addToCart" onClick={addToCartHandler}>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default Product

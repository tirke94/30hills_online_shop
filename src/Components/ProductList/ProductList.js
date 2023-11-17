import Product from "../Product/Product"
import React from "react"
import "./ProductList.css"

const ProductList = ({ products, onAddItemToCartHandler }) => {
    return (
        <div className="productsSection">
            {products.map((item) => (
                <Product
                    key={item.id}
                    product={item}
                    onAddItemToCartHandler={onAddItemToCartHandler}
                />
            ))}
        </div>
    )
}

export default ProductList

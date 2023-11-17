import React, { useState } from "react"
import data from "../data.json"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState(
        data.products.data.items.find((el) => el.id === params.productId),
    )

    return <div>{product.name}</div>
}

export default ProductDetails

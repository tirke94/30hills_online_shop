import React, { useState } from "react"
import "./CartItem.css"

const CartItem = ({
    product,
    onRemoveItemFromCart,
    onCalculateTotalAmount,
}) => {
    const [amount, setAmount] = useState(product.amount)

    const increaseProductAmount = () => {
        product.amount++
        setAmount((prevState) => {
            return prevState + 1
        })
        onCalculateTotalAmount()
    }

    const decreaseProductAmount = () => {
        product.amount--
        onCalculateTotalAmount()
        if (amount !== 1) {
            setAmount((prevState) => {
                return prevState - 1
            })
            return
        }
        onRemoveItemFromCart(product)
    }

    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <p>{product.name}</p>
                <p className="cart-item-info-price">{`$${(
                    product.price * product.amount
                ).toFixed(2)}`}</p>
            </div>
            <div className="cart-item-amount">
                <span className="cart-item-amount-number">{amount}</span>
                <div className="cart-item-amount-controls">
                    <button
                        className="cart-item-amount-btn"
                        onClick={decreaseProductAmount}
                    >
                        -
                    </button>
                    <button
                        className="cart-item-amount-btn"
                        onClick={increaseProductAmount}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem

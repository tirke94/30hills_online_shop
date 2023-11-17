import React from "react"
import { useLockBodyScroll } from "@uidotdev/usehooks"
import toast from "react-hot-toast"
import CartItem from "../CartItem/CartItem"

import "./ShoppingCart.css"

const ShoppingCart = ({
    totalAmount,
    selectedProducts,
    onShowCartHandler,
    onRemoveItemFromCart,
    onCalculateTotalAmount,
}) => {
    useLockBodyScroll()

    return (
        <div className="cartBackground">
            <div className="shoppingCart">
                <h1>Shopping cart</h1>
                <div className="selectedProducts">
                    {selectedProducts.length === 0 ? (
                        <p className="emptyCart">
                            {"No products in the cart! Go Shop!"}
                        </p>
                    ) : (
                        selectedProducts.map((prod) => {
                            return (
                                <CartItem
                                    onCalculateTotalAmount={
                                        onCalculateTotalAmount
                                    }
                                    onRemoveItemFromCart={onRemoveItemFromCart}
                                    key={prod.id}
                                    product={prod}
                                />
                            )
                        })
                    )}
                </div>
                <div className="total-amount-section">
                    <p>Total amount:</p>
                    <p className="total-amount-section-price">
                        {`$${totalAmount.toFixed(2)}`}
                    </p>
                </div>
                <div className="div--btns">
                    <button
                        onClick={onShowCartHandler}
                        className="shoppingCart--btn close--btn"
                    >
                        Close
                    </button>
                    <button
                        className="shoppingCart--btn buy--btn"
                        onClick={() =>
                            toast.error(
                                "Payment processor is in integration process",
                            )
                        }
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart

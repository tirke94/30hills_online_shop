import React from 'react'
import './ShoppingCart.css'

const ShoppingCart = ({ selectedProducts }) => {

    return (
        <div className='shoppingCart'>
            <h1>Shopping card</h1>
            <div class="selectedProducts">
                {selectedProducts}
            </div>
            <div class="div--btns">
                <button class="shoppingCart--btn close--btn">
                    Close
                </button>
                <button class="shoppingCart--btn buy--btn">
                    Buy
                </button>
            </div>
        </div>
    )
}

export default ShoppingCart
import Navigation from "./Components/Navigation/Navigation"
import ProductList from "./Components/ProductList/ProductList"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart"
import { useState } from "react"
import data from "./data.json"
import toast, { Toaster } from "react-hot-toast"
import Filters from "./Components/Filters/Filter"

// import { getAllProducts } from "./Utils/http"

import "./App.css"

function App() {
    const [allProducts, setAllProducts] = useState(data.products.data.items)
    const [showCart, setShowCart] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    const showCartHandler = () => {
        setShowCart((prevState) => {
            return !prevState
        })
        calculateTotalAmount()
    }

    const addItemToCartHandler = (newProd, amount) => {
        if (cartProducts.find((el) => el.id === newProd.id)) {
            toast.error(
                `Already added this product!\n Add product amount in the cart!`,
            )
            return
        }
        setCartProducts((prevState) => {
            return [...prevState, { ...newProd, amount }]
        })
        toast.success(`Successfully added product!`)
    }

    const removeItemFromCartHandler = (prod) => {
        setCartProducts((prevState) => {
            return prevState.filter((item) => item.id !== prod.id)
        })
    }

    const calculateTotalAmount = () => {
        let total = 0
        cartProducts.forEach((el) => {
            total += el.price * el.amount
        })
        setTotalAmount(total)
    }

    const ascendingFilterHandler = () => {
        setAllProducts([...allProducts.sort((a, b) => a.price - b.price)])
        return
    }

    const descendingFilterHandler = () => {
        setAllProducts([...allProducts.sort((a, b) => b.price - a.price)])
        return
    }
    const categoryFilterHandler = (event) => {
        const filteredArray = data.products.data.items.filter(
            (item) => item.category === event.target.value,
        )
        setAllProducts([...filteredArray])
    }

    const searchFilterHandler = (searchValue) => {
        if (searchValue === "") {
            setAllProducts(data.products.data.items)
            return
        }
        setAllProducts(
            data.products.data.items.filter(
                (item) =>
                    item.name.includes(searchValue) ||
                    item.description.includes(searchValue),
            ),
        )
    }

    // const fetchProducts = () => {
    //     getAllProducts()
    //         .then((response) => {
    //             setAllProducts(response.data.products.data.items)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // useEffect(() => {
    //     fetchProducts()
    // }, [fetchProducts])

    return (
        <div className="App">
            <Navigation
                onShowCartHandler={showCartHandler}
                itemsCounter={cartProducts.length}
            />
            <Filters
                onAscendingFilterHandler={ascendingFilterHandler}
                onDescendingFilterHandler={descendingFilterHandler}
                onCategoryFilterHandler={categoryFilterHandler}
                onSearchFilterHandler={searchFilterHandler}
            />

            <ProductList
                products={allProducts}
                onAddItemToCartHandler={addItemToCartHandler}
                onCalculateTotalAmount={calculateTotalAmount}
            />
            {showCart && (
                <ShoppingCart
                    totalAmount={totalAmount}
                    selectedProducts={cartProducts}
                    onShowCartHandler={showCartHandler}
                    onRemoveItemFromCart={removeItemFromCartHandler}
                    onAddItemToCartHandler={addItemToCartHandler}
                    onCalculateTotalAmount={calculateTotalAmount}
                />
            )}
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        color: "#fff",
                        fontSize: "1.2rem",
                    },
                    success: {
                        style: {
                            background: "#9bff9b",
                            color: "#006e00",
                        },
                    },
                    error: {
                        style: {
                            background: "#fd9393",
                            color: "#f00",
                        },
                    },
                }}
            />
        </div>
    )
}

export default App

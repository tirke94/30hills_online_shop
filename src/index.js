import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Root from "./Pages/Root"
import ProductDetails from "./Pages/ProductDetails"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "product/:productId",
                element: <ProductDetails />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

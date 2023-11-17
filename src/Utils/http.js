import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://30hills.com/api",
    timeout: 1000,
    headers: {},
})

export const getAllProducts = () => {
    return axiosInstance.get("/products.json")
}

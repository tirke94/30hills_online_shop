import React, { useState } from "react"
import { ReactComponent as ArrowUp } from "../../Assets/arrow-up-solid.svg"
import { ReactComponent as ArrowDown } from "../../Assets/arrow-down-solid.svg"
import { extractCategories } from "../../Utils/helpers"
import data from "../../data.json"

import "./Filters.css"

const Filters = ({
    onAscendingFilterHandler,
    onDescendingFilterHandler,
    onCategoryFilterHandler,
    onSearchFilterHandler,
}) => {
    const [priceAsc, setPriceAsc] = useState(false)
    const [priceDesc, setPriceDesc] = useState(false)
    const [categories, setCategories] = useState(
        extractCategories(data.products.data.items),
    )
    const [search, setSearch] = useState("")

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const filterAscending = () => {
        setPriceAsc(true)
        setPriceDesc(false)
        onAscendingFilterHandler(priceAsc)
    }

    const filterDescending = () => {
        setPriceAsc(false)
        setPriceDesc(true)
        onDescendingFilterHandler(priceDesc)
    }

    return (
        <div className="filters">
            <div>
                <div className="filters-search-container">
                    <input
                        className="filters-search"
                        type="text"
                        value={search}
                        onChange={searchHandler}
                        placeholder="Search products..."
                    />
                    <button
                        className="filters-search-btn"
                        onClick={() => onSearchFilterHandler(search)}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="advanceFilters">
                <select
                    className="filters-category"
                    onChange={onCategoryFilterHandler}
                >
                    <option value={"default"}>{"Select category"}</option>
                    {categories.map((category, index) => {
                        return (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        )
                    })}
                </select>
                <div className="filters-sort">
                    <div
                        className={`filters-sort-item ${priceAsc ? "active-price-filter" : ""
                            }`}
                        onClick={filterAscending}
                    >
                        <p>{"price "}</p>
                        <ArrowUp />
                    </div>
                    <div
                        className={`filters-sort-item ${priceDesc ? "active-price-filter" : ""
                            }`}
                        onClick={filterDescending}
                    >
                        <p>{"price "}</p>
                        <ArrowDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
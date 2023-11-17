export const randomizeItem = () => {
    return Math.floor(Math.random() * 3)
}

export const extractCategories = (arr) => {
    const categories = []

    arr.forEach((item) => {
        if (!categories.find((el) => el === item.category))
            categories.push(item.category)
    })

    return categories
}
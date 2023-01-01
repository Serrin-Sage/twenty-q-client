import { useState, useEffect } from "react"


const CategoryPage = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => {
            setCategories(data)
        })
    }, [])
    return (
        <div className="category-container">
            <div className="category-content">
                <h1>Categories</h1>
                {
                    categories.map((category) =>{
                        return (
                            <div key={category.id}>
                                {category.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPage
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
            <h1 className="title">Categories</h1>
            <div className="category-names">
                {
                    categories.map((category) =>{
                        return (
                            <div key={category.id} className="category">
                                <div>
                                    {category.name}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            </div>
        </div>
    )
}

export default CategoryPage
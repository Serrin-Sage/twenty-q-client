import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const CategoryPage = ({ setSelectedCat }) => {
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
                            <div key={category.id}>
                                <div className="category" onClick={() => setSelectedCat(category.name)}>
                                    <Link to="/lobbyform" className="">{category.name}</Link>
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
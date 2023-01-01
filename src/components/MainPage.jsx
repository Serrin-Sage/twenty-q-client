import { Link } from "react-router-dom"

const MainPage = () => {

    return (
        <div className="main-page">
            <div className="main-content">
                <h1 className="title">20 Question Multiplayer</h1>
                <div className="main-buttons">
                    <Link to="categories" className="main-btn">HOST</Link>
                    <Link to="/" className="main-btn">JOIN</Link>
                </div>
            </div>
        </div>
    )
}

export default MainPage
import { Link } from "react-router-dom"
import { useState } from "react"
import Clippy from "./Clippy"
const MainPage = ({ setHost }) => {
    

    return (
        <div className="main-page">
            <div className="main-content">
                <div className="title-container">
                    <h1 className="title">20 Question Multiplayer</h1>
                </div>
                <div className="main-buttons">
                    <Link to="login" className="main-btn" onClick={() => setHost(true)}>HOST</Link>
                    <Link to="login" className="main-btn" onClick={() => setHost(false)}>JOIN</Link>
                </div>
            <Clippy />
            </div>
        </div>
    )
}

export default MainPage
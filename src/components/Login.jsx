import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ host }) => {
    const [username, setUserName] = useState("")
    const [selectedPic, setSelectedPic] = useState("default-icon")
    const navigate = useNavigate()

    let user = "";
    host ? user = "Host" : user = "Player"

    const handleSubmit = (e) => {
        e.preventDefault()
        if (host) {
            navigate('/categories')
        }
        else {
            
        }

    }
    return (
        <div className="login-container">
            <h1 className="title">You are a {user}</h1>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <label className="user-label">
                        Enter a username:
                        <input type="text" name="name" className="user-input" onChange={(e) => setUserName(e.target.value)}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Choose a Profile Picture
                        <div className={`user-icon ${selectedPic}`}></div>
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Enter" className="enter-btn"/>
                </form>
            </div>
        </div>
    )
}

export default Login
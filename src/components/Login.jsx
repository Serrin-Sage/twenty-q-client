import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ host }) => {
    const [username, setUserName] = useState("")
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
        <div>
            <h1>You are a {user}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter a username:
                    <input type="text" name="name" onChange={(e) => setUserName(e.target.value)}/>
                </label>
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login
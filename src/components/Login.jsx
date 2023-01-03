import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PictureSwitcher from "./PictureSwitcher";

const Login = ({ host }) => {
    const [username, setUserName] = useState("")
    const [selectedPic, setSelectedPic] = useState('')
    const navigate = useNavigate()

    let user = "";
    host ? user = "Host" : user = "Player"

    useEffect(() => {
        const currentPicture = localStorage.getItem('profile-picture')
        if (currentPicture) {
            setSelectedPic(currentPicture)
        }
    }, [])

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
                    <div>
                        <img src={selectedPic.url} alt={`Image of ${selectedPic.name}`} className="user-icon"/>
                    </div>
                    <label>
                        Choose a Profile Picture
                    </label>
                    <PictureSwitcher setSelectedPic={setSelectedPic}/>
                    <br />
                    <input type="submit" value="Enter" className="enter-btn"/>
                </form>
            </div>
        </div>
    )
}

export default Login
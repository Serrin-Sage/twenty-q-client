import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PictureSwitcher from "./PictureSwitcher";
import Clippy from "./Clippy";

const Login = ({ host, setCurrentUser, setShowClippy, showClippy }) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (host) {
            let req = await fetch("http://localhost:3000/hosts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: username,
                    image: selectedPic.url
                })
            })
            let res = await req.json()
            if (req.ok) {
                setCurrentUser(res)
                navigate('/categories')
            } else {
                setShowClippy(true)
            }
            
        }
        else {
            let req = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: username,
                    image: selectedPic.url
                })
            })
            let res = await req.json()
            if (req.ok) {
                navigate('/gamelist')
            } else {
                setShowClippy(true)
            }
        }
    }
    return (
        <div className="login-container">
            <div className="title-container">
                <h1 className="title">You are a {user}</h1>
            </div>
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
            {showClippy ? <Clippy message={"Oops your username is blank!"} 
                                  setShowClippy={setShowClippy} 
                                /> 
                        : null}
        </div>
    )
}

export default Login
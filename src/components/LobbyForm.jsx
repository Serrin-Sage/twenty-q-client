import { useState, useEffect } from "react"
import Clippy from "./Clippy"
const LobbyForm = ({ selectedCat, currentUser, setShowClippy, showClippy }) => {
    const [lobbyName, setLobbyName] = useState("")
    const [numOfPlayers, setNumOfPlayers] = useState(1)
    const [answer, setAnswer] = useState("")
    const [password, setPassword] = useState("")

    console.log(currentUser)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let req = await fetch("http://localhost:3000/lobbies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                host_id: currentUser.id,
                lobbyname: lobbyName,
                players: numOfPlayers,
                answer: answer,
                category: selectedCat,
                password: password,
            })
        })
        let res = await req.json()
        if (req.ok) {

        } else {
            console.log("NOT OK")
            setShowClippy(true)
        }
        

    }

    return (
        <div className="lobby-form-container">
            <div className="form-content">
                <div className="title-container">
                    <h1 className="title">Lobby Form</h1>
                </div>
                <form onSubmit={handleSubmit} className="form-container">
                    <label className="form-label">
                        Enter lobby name:
                        <input type="text" value={lobbyName} name="name" className="input-box" onChange={(e) => setLobbyName(e.target.value)}/>
                    </label>
                    <br />
                    <br />
                    <label className="form-label">
                        Password:
                        <input type="password" name="password" className="input-box"onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <br />
                    <br />
                    <label className="form-label">
                        Number of players:
                        <select className="number-select" onChange={(e) => setNumOfPlayers(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                    <div className="answer-container">
                        <label className="form-label">
                            Think of something from the <span className="target-category">{selectedCat}</span> category <br/>
                            and input it below: <br />
                            <input type="text" name="answer" className="input-box"  value={answer} onChange={(e) => {setAnswer(e.target.value)
                            console.log(e.target.value)}}/>
                        </label>
                    </div>
                    <br/>
                    <input type="submit" value="Create Lobby" className="create-btn"/>
                </form>
            </div>
            {showClippy ? <Clippy message={"Oops your lobby and/or answer is blank!"}
                setShowClippy={setShowClippy}
            />
                : null}
        </div>
    )
}

export default LobbyForm
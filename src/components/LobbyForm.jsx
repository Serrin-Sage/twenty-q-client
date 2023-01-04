import { useState, useEffect } from "react"

const LobbyForm = ({ selectedCat }) => {
    const [lobbyName, setLobbyName] = useState("")
    const [numOfPlayers, setNumOfPlayers] = useState(0)
    const [answer, setAnswer] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/lobbies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                host_id: 1,
                lobbyname: lobbyName,
                players: numOfPlayers,
                password: "",
                answer: answer
            })
        })
        .catch((errors) => console.log(errors))
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
                        <input type="password" name="password" className="input-box"/>
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
                            <input type="text" name="answer" className="input-box" onChange={(e) => setAnswer(e.target.value)}/>
                        </label>
                    </div>
                    <br/>
                    <input type="submit" value="Create Lobby"/>
                </form>
            </div>
        </div>
    )
}

export default LobbyForm
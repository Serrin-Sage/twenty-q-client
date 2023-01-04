import { useState, useEffect } from "react"

const GameList = () => {
  const [gameArray, setGameArray] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/lobbies")
    .then((res) => res.json())
    .then((data) => {
      setGameArray(data)
    })
  },[])

  return (
    <div className="game-list-container">
      <h1>Game List</h1>
      <div className="game-list-content">
      {
        gameArray.map((game) => {
          return (
            <div className="lobby-details">
              <div>
                {game.lobbyname}
              </div>
              <div>
                {game.category}
              </div>
              <div>
                {game.players}
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default GameList
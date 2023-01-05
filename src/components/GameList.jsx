import { useState, useEffect } from "react"

const GameList = () => {
  const [gameArray, setGameArray] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch("http://localhost:3000/lobbies")
    .then((res) => res.json())
    .then((data) => {
      setGameArray(data)
    })
  },[])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])

  const ActiveGames = () => {
    return (
    <>
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
              {game.password.length < 1 ? null : <div> <img src="src/assets/icons/passwordKeyCopy.png" className="password-key"/></div>
              }
            </div>
          )
        })
      }
    </>
    )
  }

  return (
    <div className="game-list-container">
      <div className="title-container">
        <h1 className="title">Game List</h1>
      </div>
      <div className="game-list-content">
        {
          loading ? <div className="blank-list"><img src="https://tinyurl.com/loading-symbol" className="loading-symbol"/></div> 
          : 
          <>{gameArray.length === 0 ? <div className="blank-list">NO GAMES FOUND</div> : <ActiveGames />} </>
        }
        
      
      </div>
    </div>
  )
}

export default GameList
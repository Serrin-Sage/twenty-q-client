import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const GameList = ({ setLobby, currentHost }) => {
  const [gameArray, setGameArray] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

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

  const navigateToLobby = (clickedLobby) => {
    setLobby(clickedLobby)
    navigate('/chat')
  }
  const ActiveGames = () => {
    return (
    <>
      {
        gameArray.map((game) => {
          return (
            <div className="lobby-details" onClick={() => navigateToLobby(game)}>
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
        <div className="lobby-details" id="table-titles">
          <div>Lobby Name</div>
          <div>Category</div>
          <div>Num of players</div>
        </div>
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
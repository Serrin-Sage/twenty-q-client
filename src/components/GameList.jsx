const GameList = () => {

  const exampleGame = [
    {
      host_id: 1,
      lobbyname: "TEST LOBBY",
      category: "Movie",
      players: 6,
      password: false
    },
    {
      host_id: 2,
      lobbyname: "TEST LOBBY 2",
      category: "Animal",
      players: 4,
      password: true
    }
]

  return (
    <div className="game-list-container">
      <h1>Game List</h1>
      <div className="game-list-content">
      {
        exampleGame.map((game) => {
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
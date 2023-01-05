import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import Login from './components/Login'
import CategoryPage from './components/CategoryPage'
import LobbyForm from './components/LobbyForm'
import GameList from './components/GameList'
import Chat from './components/Chat'

function App() {
  const [selectedCat, setSelectedCat] = useState("")
  const [currentUser, setCurrentUser] = useState([])
  const [currentHost, setCurrentHost] = useState([])
  const [showClippy, setShowClippy] = useState(false)
  const [host, setHost] = useState(false)
  const [lobby, setLobby] = useState({})

  return (
    <div className="App">
      <div className='main-page-container'>
        <Routes>
          <Route path="/" element={ <MainPage setHost={setHost}/>}/>
          <Route path="/categories" element={ <CategoryPage setSelectedCat={setSelectedCat}/>} />
          <Route path="/login" element={<Login host={host} 
                                               setCurrentUser={setCurrentUser} 
                                               setCurrentHost={setCurrentHost}
                                               setShowClippy={setShowClippy} 
                                               showClippy={showClippy}/>}/>
          <Route path="/lobbyform" element={<LobbyForm  setLobby={setLobby}
                                                        selectedCat={selectedCat} 
                                                        currentHost={currentHost}
                                                        setShowClippy={setShowClippy}
                                                        showClippy={showClippy}/>} />
          <Route path='/gamelist' element={<GameList currentHost={currentHost} setLobby={setLobby}/>}/>


          <Route path='/chat' element={<Chat lobby={lobby} 
                                             currentUser={currentUser}
                                             currentHost={currentHost}
                                             host={host}/>}/>

        </Routes>
        
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import Login from './components/Login'
import CategoryPage from './components/CategoryPage'
import LobbyForm from './components/LobbyForm'
import GameList from './components/GameList'

function App() {
  const [selectedCat, setSelectedCat] = useState("")
  const [host, setHost] = useState(false)
  return (
    <div className="App">
      <div className='main-page-container'>
        <Routes>
          <Route path="/" element={ <MainPage setHost={setHost}/>}/>
          <Route path="/categories" element={ <CategoryPage setSelectedCat={setSelectedCat}/>} />
          <Route path="/login" element={<Login host={host}/>}/>
          <Route path="/lobbyform" element={ <LobbyForm selectedCat={selectedCat}/>} />
          <Route path='/gamelist' element={<GameList />}/>
        </Routes>
        
      </div>
    </div>
  )
}

export default App

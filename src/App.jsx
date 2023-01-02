import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import CategoryPage from './components/CategoryPage'
import LobbyForm from './components/LobbyForm'
function App() {
  const [selectedCat, setSelectedCat] = useState("")

  return (
    <div className="App">
      <div className='main-page-container'>
        <Routes>
          <Route path="/" element={ <MainPage />}/>
          <Route path="/categories" element={ <CategoryPage setSelectedCat={setSelectedCat}/>} />
          <Route path="/lobbyform" element={ <LobbyForm selectedCat={selectedCat}/>} />
        </Routes>
        
      </div>
    </div>
  )
}

export default App

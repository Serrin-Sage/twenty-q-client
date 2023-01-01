import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import CategoryPage from './components/CategoryPage'
function App() {

  return (
    <div className="App">
      <div className='main-page-container'>
        <Routes>
          <Route path="/" element={ <MainPage />}/>
          <Route path="/categories" element={ <CategoryPage />} />
        </Routes>
        
      </div>
    </div>
  )
}

export default App

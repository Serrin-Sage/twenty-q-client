import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './stylesheets/mainpage.css'
import './stylesheets/categorypage.css'
import './stylesheets/lobbyform.css'
import './stylesheets/loginpage.css'
import './stylesheets/chat.css'
import './stylesheets/gamelist.css'
import './stylesheets/clippy.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Favoritos from './routes/Favoritos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './rotas/Home.jsx'
import Header from './components/Header'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favoritos from './rotas/Favoritos.jsx'

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

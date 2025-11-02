import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AboutPage from './components/AboutPage.jsx'
import EnterpriseForm from './components/EnterpriseForm.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/enterprise" element={<EnterpriseForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

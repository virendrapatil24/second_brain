import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Singup from './pages/Singup'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Logout from './pages/Logout'

const isAuthenticated = () => {
  return !!localStorage.getItem("secondBrainAuthToken")
}

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(isAuthenticated)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("secondBrainAuthToken");
    setIsUserLoggedIn(false);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={isUserLoggedIn ? <Navigate to="/" /> : <Singup />} />
          <Route path="/login" element={isUserLoggedIn ? <Navigate to="/" /> : <Login setIsUserLoggedIn={setIsUserLoggedIn} />} />
          <Route path="/" element={isUserLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

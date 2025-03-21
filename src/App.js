import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth/auth';
import MainHeader from './components/header/header';
import SecondNavbar from './components/header/secondNav/secondNav';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainHeader />
        <SecondNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
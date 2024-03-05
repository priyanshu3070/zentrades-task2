import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard';
import DashboardPage from './components/DashboardPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginDashboard />} /> {/* Provide an element to render */}
        <Route path="/dashboard" element={<DashboardPage />} /> {/* Provide an element to render */}
      </Routes>
    </Router>
  );
}

export default App;

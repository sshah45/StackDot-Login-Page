import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogInPage from './LogIn';
import Dashboard from './Dashboard';
import { useState } from 'react';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'; // Global styles

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add other routes here for different pages like Services, Schedule, Blog, etc. */}
            </Routes>
        </Router>
    );
};

export default App;
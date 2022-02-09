import React from 'react';
import {
    BrowserRouter as Router, 
    Routes, 
    Route,
  } from 'react-router-dom';
// components
// import { NavBar, Footer } from '../components';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import '../assets/scss/Theme.scss';

const App = () => {    

    return (
        <div className="landing">         

            <Router>
                <Routes>                
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>         
            </Router>        
            
        </div>
    );
};

export default App;
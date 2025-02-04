

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Dashboard from './components/Dashboard'; 
import AddMovie from './components/AddMovie'; 


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/add-movie" element={<AddMovie />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

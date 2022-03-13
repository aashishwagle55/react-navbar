import React, { Fragment } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Videos from './components/pages/Videos';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;

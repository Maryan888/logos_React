import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Todos from './components/Todos';
import Comments from './components/Comments';
import Albums from './components/Albums';



const App = () => {
  return (
   
      <Router>
        <div className='wrapAll'>
          <Header />
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/about" element={<Comments />} />
            <Route path="/contact" element={<Albums />} />
          </Routes>
        </div>
      </Router>
   
   
  );
};

export default App;

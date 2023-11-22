

// import "./App.css";
// import NavBar from "./components/NavBar";

// const App = () => {

  

//   return(
//     <div>
//       <NavBar/>
//     </div>
//   )
// };

// export default App;





// import React from "react";
// import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
// import Todos from "./components/Todos";
// import Albums from "./components/Albums";
// import Comments from "./components/Comments";
// import { Route } from 'react-router-dom';
// import Post from "./components/Post";

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Todos from './components/Todos';
import Albums from './components/Albums';
import Comments from './components/Comments';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/todos">Todos</Link></li>
      <li><Link to="/albums">Albums</Link></li>
      <li><Link to="/comments">Comments</Link></li>
    </ul>
  </nav>
);

const App = () => (
  <Router>
    <NavBar />
    
     <Routes>
        <Route path="/todos" element={<Todos/>} />
        <Route path="/albums" element={<Albums/>} />
        <Route path="/comments" element={<Comments/>} />
     </Routes>
    
  </Router>
);

export default App;


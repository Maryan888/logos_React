import Posts from "./components/Posts";
import React from "react";
import "./App.css";
import Comments from "./components/Comments";
import Albums from "./components/Albums";

const App = () => {

  

  return (
    <div className="container">
    <Posts/>
    <Comments/>
    <Albums/>
    </div>
  )
};

export default App;

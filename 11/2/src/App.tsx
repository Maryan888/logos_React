import React from "react";
import PostComponents from "./components/PostComponents";
import "./App.css";
import { users } from "./components/assets/users";
import { capsuls } from "./components/assets/capsuls";
const App: React.FC = () => {
  return (
    <>
      <PostComponents users={users} capsuls={capsuls} />
    </>
  );
};

export default App;

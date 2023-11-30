import { useState } from "react";
import UseMemoComponent from "./components/UseMemoComponent";
import "./App.css";

const App = () => {
  const [data, setData] = useState({
    name: 'Max',
    lastName: 'Valchenko',
    age: 0,
});

  
  const changeData = () => {
    setData((prevData) => ({ ...prevData, name: 'Tom' }));
  };


  return (
    <div>
      <UseMemoComponent data={data} />
      <br />
      <br />
      <button onClick={changeData}>Change Data</button>
    </div>

  )
};

export default App;

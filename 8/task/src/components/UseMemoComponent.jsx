import { useCallback, useMemo, useState,useEffect } from "react";

const UseMemoComponent = ({data}) => {

  const [count, setCount] = useState(0);
 

  const func1 = (num) => {
    for (let i = 0; i < 100000000; i++) {
      num += 1;
    }
    return num;
  };


  // Функція мемонізована
  let func1Res = useMemo(() => func1(count), [data]);

  const changeCountHandler = () => setCount((c) => c + 1);

  // Колбек функція
  const callBackFunction = useCallback(() => {
    data.age++
    return 
  },[data])

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Email: {data.age}</p>
      <div>{func1Res}</div>
      <button onClick={changeCountHandler} >
        Plus number
      </button>
      <br />
      <br />
      <p>{data.age}</p>
      <button onClick={callBackFunction}>Plus number</button>
      {/* <button>Add data</button> */}
    </div>
  );
};


// Хук useFetch
const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com${endpoint}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading };
};



export default UseMemoComponent;

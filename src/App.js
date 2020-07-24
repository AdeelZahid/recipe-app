import React,{useEffect, useState} from 'react';
import './App.css';

const App =() => {

  const [counter, setCounter] = useState(100);
  const App_Id = '992d87d3';
  const App_Key = "482c05899eb48b545a107644077aa509";
  let exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${App_Id}&app_key=${App_Key}`;

  useEffect(() => {
    console.log("Effect has been RUn .. ")
  }, [])




  return (
    <div className="App">
      <form action="" className="search-form">
        <input type="text" name="" id="" className="search-bar"/>
        <button className="search-button"> Search </button>
      </form>
        <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> 
    </div>
  )
}

export default App;

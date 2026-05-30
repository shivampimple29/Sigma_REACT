import { useState } from "react";

export default function Counter() {
  function init(){
    console.log("init is called");
    return Math.random();
  }

  let [count, setCount] = useState(init);


  function handleCount() {
    setCount((currCount)=>{return currCount+1});

  };

  return (
    <>
      <h3>Count : {count}</h3>
      <button onClick={handleCount}>Increase count</button>
    </>
  );
}

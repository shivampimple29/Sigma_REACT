import { useEffect, useState } from "react";

function UseEffect() {
  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(0);

  function handleCounterX() {
    setCountX((currCount) => currCount + 1);
  }

  function handleCounterY() {
    setCountY((currCount) => currCount + 1);
  }

  useEffect(
    function sideEffect() {
      console.log("this is a side effect!");
    },
    [],
  );

  return (
    <>
      <h3>CountX:{countX}</h3>
      <button onClick={handleCounterX}>+1</button>
      <h3>CountY:{countY}</h3>
      <button onClick={handleCounterY}>+1</button>
    </>
  );
}

export default UseEffect;

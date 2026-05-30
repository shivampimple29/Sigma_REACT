import { useEffect, useState } from "react";

function Joke() {
  const [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";
  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  },[]);

  return (
    <>
      <h3>Joke!</h3>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={getNewJoke}>New Joke</button>
    </>
  );
}

export default Joke;

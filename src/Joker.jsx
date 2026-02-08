import { useEffect, useState } from "react";
import "./Joker.css";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let respose = await fetch(URL);
    let jsonResponse = await respose.json();
    console.log(jsonResponse);
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let respose = await fetch(URL);
      let jsonResponse = await respose.json();
      console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div className="joker-container">
      <h1>Randome Joke!!</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>Get New Joke</button>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import ScoreBoard from "./component/ScoreBoard";
import Card from "./component/Card";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useState(0);
  const [charactersList, setCharactersList] = useState([]);

  // call the api  and get atleast 4 chars
  function fetchData() {
    fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8]")
      .then(res => res.json())
      .then(data => setCharactersList(data));
  }

  useEffect(() => { fetchData() }, []);

  console.log(charactersList);
  const characterComponent = charactersList.map(character => <Card key={character.id} name={character.name} image={character.image} />);

  return (
    <div className="container">
      <br />
      <ScoreBoard points={score} bScore={bestscore} />
      <br />

      {/* cards grid  */}
      <div className="row row-cols-3 row-cols-md-3 g-4">
          { characterComponent }
      </div>
    </div>
  );
}

export default App;

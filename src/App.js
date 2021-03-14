import React, { useState, useEffect } from 'react';
import ScoreBoard from "./component/ScoreBoard";
import Card from "./component/Card";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useState(0);
  const [clicked, setclicked] = useState(false);
  const [charactersList, setCharactersList] = useState([]);

  // get 8 chars
  function fetchData() {
    fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8]")
      .then(res => res.json())
      .then(data => setCharactersList(data));
  }
// call the api when component initially mounts
  useEffect(() => { fetchData() }, []);



  function handleClick(idx) {
  //  change position of the cards randomly
  // add score if pic has not been clicked before
  // score to 0 if user clicked a picture that was already clicked 
  }

  console.log(charactersList);
  const characterComponent = charactersList.map(character => <Card key={character.id} name={character.name} image={character.image} clickfunct={handleClick} charId={character.id} isClicked={clicked}/>);

  // console.log(characterComponent);

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

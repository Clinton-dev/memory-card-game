import React, { useState, useEffect } from 'react';
import ScoreBoard from "./component/ScoreBoard";
import Card from "./component/Card";
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useState(0);
  const [clicked, setclicked] = useState([]);
  const [charactersList, setCharactersList] = useState([]);
  let clickedChar = [];

  function fetchData() {
    fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8]")
      .then(res => res.json())
      .then(data => setCharactersList(data));
  }

  
  useEffect(() => { fetchData(); }, []);
  
  const characterComponent = charactersList.map(character => <Card key={character.id} name={character.name} image={character.image} clickfunct={handleClick} charId={character.id}/>);  
  
  function handleClick(idx) {
   clickedChar.push(idx);
   shuffleAry();
   handleScore();
  }
  
  function handleScore() {
    // score to 0 if user clicked a picture that was already clicked 
    // add score if pic has not been clicked before
    console.log(clickedChar);
    console.log(charactersList);
  }

  function shuffleAry() {
    const shuffledAry = shuffle(charactersList);
    setCharactersList(shuffledAry);
  }

  function shuffle(ary) {
    let currentIdx = ary.length;

    while (0 !== currentIdx ) {
      let randIdx = Math.floor(Math.random() * currentIdx);
      currentIdx -= 1;
      [ary[currentIdx], ary[randIdx]] = [ary[randIdx], ary[currentIdx]];
    }
    return ary;
  }


  return (
    <div className="container">
      <br />
      <ScoreBoard points={score} bScore={bestscore} />
      <br />
      <div className="row row-cols-3 row-cols-md-3 g-4">
        { characterComponent } 
      </div>
    </div>
  );
}

export default App;

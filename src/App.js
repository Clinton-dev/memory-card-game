import React, { useState, useEffect, useCallback } from 'react';
import ScoreBoard from "./component/ScoreBoard";
import Card from "./component/Card";
import './App.css';


let clickedChar = [];

function App() {
  const [score, setScore] = useState(0);
  const [bestscore, setBestScore] = useState(0);
  const [clicked, setclicked] = useState([]);
  const [charactersList, setCharactersList] = useState([]);

  function fetchData() {
    fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8]")
      .then(res => res.json())
      .then(data => setCharactersList(data));
  }

  
  useEffect(() => { 
    // Only call the api when the characterList array is empty
    if (charactersList.length === 0) {
    fetchData(); 
    }
  }, [clickedChar]);
  
  const characterComponent = charactersList.map(character => <Card key={character.id} name={character.name} image={character.image} clickfunct={() => handleClick(character.id)} charId={character.id}/>);  

  // It's better to use ids to track which picture has been clicked.
  function handleClick(id) {
    if (clickedChar.includes(id)) {
      handleScore('remove')
    } else {
      clickedChar.push(id);
      handleScore();
    }
    console.log(clickedChar)
   shuffleAry();
  }
  
  function handleScore(params) {
    // score to 0 if user clicked a picture that was already clicked 
    // add score if pic has not been clicked before
    // Remove 1 if a user clicks on a pic that has been clicked before.
    if (params === 'remove') {
      setScore(score - 1)
    } else {
      setScore(score + 1)
    }
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
        {characterComponent } 
      </div>
    </div>
  );
}

export default App;

import React from 'react';

const ScoreBoard = (props) => {
  // create score and bestscore  then set them to 0
  // when user clicks a picture add a score +1 unless the pic has already been clicked 

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <div>
          <h2>rick &amp; morty memory game</h2>
        </div>
        <div>
          <p className="text-center">score board</p>
          <p>score: <span className="score">{ props.points }</span> &nbsp; best score: <span className="score">{props.bScore}</span></p>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
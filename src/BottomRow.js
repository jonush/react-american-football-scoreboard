import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setQuarter] = useState(1);
  const [team1Foul, setFoulT1] = useState(0);
  const [team2Foul, setFoulT2] = useState(0);

  const q1 = event => {
    setQuarter(quarter * 0 + 1);
  }
  const q2 = event => {
    setQuarter(quarter * 0 + 2);
  }
  const q3 = event => {
    setQuarter(quarter * 0 + 3);
  }
  const q4 = event => {
    setQuarter(quarter * 0 + 4);
  }

  const foulT1 = event => {
    setFoulT1(team1Foul + 1)
  }
  const foulT2 = event => {
    setFoulT2(team2Foul + 1)
  }

  return (
    <div className="bottomRow">
      <div className='original-content'>
      <div className="down">
        <h3 className="down__title">Fouls</h3>
        <div className="down__value">{team1Foul}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Quarter</h3>
        <div className="toGo__value">{quarter}</div>
      </div>
      {/* <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div> */}
      <div className="quarter">
        <h3 className="quarter__title">Fouls</h3>
        <div className="quarter__value">{team2Foul}</div>
      </div>
      </div>
      
      <div className='extra-buttons'>
      <div className='foul-buttons'>
        <button onClick={foulT1}>Home Team Foul</button>
        <button onClick={foulT2}>Away Team Foul</button>
      </div>
      <div className='quarter-buttons'>
          <button onClick={q1}>Q1</button>
          <button onClick={q2}>Q2</button>
          <button onClick={q3}>Q3</button>
          <button onClick={q4}>Q4</button>
      </div>
      </div>
    </div>
  );
};

export default BottomRow;

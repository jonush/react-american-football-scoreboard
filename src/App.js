//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [team1, setT1] = useState(0);
  const [team2, setT2] = useState(0);
  const [time, setTime] = useState({
    minutes: parseInt(12),
    seconds: parseInt(0),
  });

  const home2 = event => {
    setT1(team1 + 2);
  }

  const home3 = event => {
    setT1(team1 + 3);
  }

  const away2 = event => {
    setT2(team2 + 2);
  }

  const away3 = event => {
    setT2(team2 + 3);
  }

  const resetS = event => {
    setT1(team1 * 0);
    setT2(team2 * 0);
  }

  const tick = event => {
    if(time.seconds === 0){
      setTime({
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  }

  React.useEffect(() => {
    let clock = setInterval(() => tick(), 1000);
    return() => clearInterval(clock);
  });

  const resetC = event => {
    setTime({
      minutes: parseInt(12),
      seconds: parseInt(0),
    })
  }

  const timer = `${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hard-coded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{team1}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{team2}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={home2}>Home 2-pointer</button>
          <button className="homeButtons__fieldGoal" onClick={home3}>Home 3-pointer</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={away2}>Away 2-pointer</button>
          <button className="awayButtons__fieldGoal" onClick={away3}>Away 3-pointer</button>
        </div>
        <button onClick={resetS} className="reset">Reset Score</button>
        <button onClick={resetC} className="reset">Reset Clock</button>
      </section>
    </div>
  );
}

export default App;

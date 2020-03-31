import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import State from './helpers/StateManager'
//import { addTouchdown } from './helpers/addTouchdown';
import logo from './logo.svg';
import './App.css';



function App(props) {

console.log(props.balls)

  const HomeTeam = 'Lions'
  const AwayTeam = 'Tiger'

  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [inning, setInning] = useState(1);

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);

  const [outs, setOuts] = useState(0);
  const [runs, setRuns] = useState(0);
  const [bases, setBases] = useState(0);
  const [message, setMessage] = useState('Play Ball!');
  const [atBat, setAtBat] = useState('Tigers');

  if (inning > 9) {
    console.log(`inning`)
    setInning(1);
  }

  const reset = () => {
    console.log('reset');
    setBalls(0);
    setStrikes(0);
    setFouls(0)
  }
  // const checkTeam = () => {
  //   return (outs < 2 || outs === 3 ? setAtBat('Team1') :reset() || setAtBat('Team2'))
  //   }

  const checkTeam = () => {
    console.log('check teams')
    if (outs === 2 ) {
      setAtBat('Lions');
    } else {
      setAtBat('Tigers');
    }
  }


  const handleStrike = () => {
    console.log('strike')
    setMessage('Strike!')
    setStrikes(strikes + 1)
    switch(strikes) {
        case 0 : setMessage('Strike 1')
        break 
        case 1: setMessage('Strike 2') 
        console.log(`strike 2`)
        break
        case 2: setMessage(`Strike 3 ~ You're Out`) ||
        console.log(`strike 2`)
        break
        case 3: setMessage(`Batter Up`) ||  reset()  || checkTeam() || outs === 2  ? handleInning(): setOuts(outs + 1)
        console.log(`strike 3`)
        break
        default:     console.log(`default`)
    }
}


  // const handleStrike = () => {
  //   console.log('strike!');
  //   setMessage('Strike!');
  //   setStrikes(strikes + 1);
  //   if (strikes === 2) {
  //     reset();
  //     setOuts(outs + 1);
  //     checkTeam();
  //   }
  //   if (outs > 2) {
  //     handleInning();
  //   }
  // }

  const handleBall = () => {
    console.log('ball!');
    setMessage(`Ball ${balls + 1}`);
    setBalls(balls + 1);
    if (balls === 4) {
      setMessage(`Take your`)
      reset();
    }
  }

  const handleFoul = () => {
    console.log('foul!');
    setMessage(`Foul`);
    setFouls( fouls + 1)
    if (fouls === 3) {
      setStrikes(1);
      setMessage(`Strike`)
      console.log(`foul 1`)
    } else if (fouls === 7)
     {
       setStrikes(2) 
       setFouls(fouls + 0)

       console.log(`foul 2`)
    }  
  }

  const handleHit = () => {
    console.log('hit!')
    const type = Math.floor(Math.random() * 5)
    console.log(type)
    switch(type)    { 
        case 0:  setMessage(`Pop fly caught you are OUT!`) ||  setOuts(outs+1) || checkTeam(type) 
        break;
        case 1: setMessage(`You made a single to first base`)
        break ;
        case 2: setMessage(`You made a double to second base`)
        break;
        case 3: setMessage(`You made a triple to third base`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        break;
        case 4:   setRuns(runs + 1) ||
         setMessage(`HOME RUN!!!`) 
         default:

    }
  }

  // const handleHit = () => {
  //   console.log('hit!');
  //   const type = Math.floor(Math.random() * 5);
  //   console.log(type);
  //   if (type === 0) {
  //     setMessage('Player doesn\'t make it to first base and is out.');
  //     setOuts(outs + 1);
  //     checkTeam();
  //   } else if (type === 1) {
  //     setMessage('Player makes it to first base.');
  //   } else if (type === 2) {
  //     setMessage('Player scores a double and makes it to second base.');
  //   } else if (type === 3) {
  //     setMessage('Player scores a triple and makes it to third base!');
  //   } else {
  //     setMessage('Home run!');
  //     setRuns(runs + 1);
  //   }
  //   setBases(bases + 1);
  //   reset();
  // }

  const handleInning = () => {
    console.log(`inning`)
    setMessage(`Next Inning ${inning + 1 }`)
    setInning(inning + 1);
    reset();
    setOuts(0);
    checkTeam();
    setRuns(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Baseball Scoreboard</h1>
        </header>
        <Display lionsScore={lionsScore} 
          tigersScore={tigersScore} 
          inning={inning} 
          balls={balls} 
          strikes={strikes} 
          outs={outs}
          runs={runs}
          />
        <h2>Now Batting: {atBat}</h2>
        {message? <h3>{message}</h3>: null}

        <Dashboard 
          inning={inning} 
          handleInning={handleInning}
          handleBall={handleBall}
          handleStrike={handleStrike}
          handleFoul={handleFoul}
          handleHit={handleHit}
          
          />
        <footer>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
    </div>
  );

}

export default App;

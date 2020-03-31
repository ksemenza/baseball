import React, { useState } from 'react'
import App from '../App'


const StateManager = () => {

    const [balls, setBalls] = useState(0);
//   const HomeTeam = 'Lions'
//   const AwayTeam = 'Tiger'

//   const scoreH = [lionsScore, setLionsScore] = useState(0);
//   const scoreA = [tigersScore, setTigersScore] = useState(0);
//   const innings = [inning, setInning] = useState(1);

  
//   const strikes = [strikes, setStrikes] = useState(0);
//   const fouls = [fouls, setFouls] = useState(0);

//   const outs = [outs, setOuts] = useState(0);
//   const runs = [runs, setRuns] = useState(0);
//   const bases = [bases, setBases] = useState(0);
//   const message = [message, setMessage] = useState('Play Ball!');
//   const bat = [atBat, setAtBat] = useState('Tigers');



    return(

        <div>
            <App balls={balls}/>
        </div>

    )

}


export default StateManager
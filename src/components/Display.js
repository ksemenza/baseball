import React from 'react';

const Display = ({ lionsScore, tigersScore, inning, balls, strikes, outs, runs }) => {
    return (
           <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 data-testid="lions-header" className="home__name">
              Lions
            </h2>

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">Inning: {inning}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Balls</h3>
            <div className="down__value">{balls}</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">Strikes</h3>
            <div className="toGo__value">{strikes}</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Runs</h3>
            <div className="ballOn__value">{runs}</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Outs</h3>
            <div className="quarter__value">{outs}</div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Display;
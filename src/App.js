import React from "react";
import "./App.css";

const App = () => {
  const createHumanCards = () => {
    let humans = [];

    for (let j = 0; j < 1002; j++) {
      humans.push(
        <li>
          <div className="face"></div>
          <dl>
            <dt>Unknown Human</dt>
            <dd>Wuhan, China</dd>
          </dl>
        </li>
      );
    }

    return humans;
  };

  return (
    <div>
      <h2>Coronavirus Pandemic</h2>
      <h1>I am human.</h1>
      <section className="columns two">
        <p className="large column">
          A single person lost is a tragedy. A thousand people lost is
          statistics. Help us pay tribute and show dignity to those we've lost
          by remembering their name.
        </p>
        <div className="column summary">
          <ul className="actions">
            <li>
              <a className="button">Plant a flower</a>
            </li>
            <li>
              <a className="button secondary">Name someone</a>
            </li>
          </ul>
          <dl>
            <dt>Started 19 December 2019</dt>
            <dd>in Wuhan, China</dd>
          </dl>
          <dl>
            <dt>Humans lost so far</dt>
            <dd>353,294</dd>
          </dl>
        </div>
      </section>

      <ul className="cards">{createHumanCards()}</ul>
      {/* <a href="mailto:volunteer@iamhuman.vip">Volunteers</a> */}
    </div>
  );
};

export default App;

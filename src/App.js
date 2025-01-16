import React, { useState } from 'react';
import './App.css';

function Key({ label, clickHandler }) {
  return (
    <button onClick={clickHandler}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function NameHeader() {
  return (
    <div className='NameTitle'>
      <h1>JOHN MARK SALAS BSIT - 3A</h1>
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const items = [
    'Being On Time',
    'Making An Effort',
    'Being High Energy',
    'Having A Positive Attitude',
    'Being Passionate',
    'Using Good Body Language',
    'Being Coachable',
    'Doing A Little Extra',
    'Being Prepared',
    'Having A Strong Work Ethic',
  ];

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp("JOHN MARK SALAS");
  };

  const ilearnedClickHandler = (e) => {
    e.preventDefault();
    setDisp("Last year, we learned the basics of ReactJS. We were taught how to create a simple website and even a calculator. It was very fun to learn ReactJS because it gave us a glimpse of what to expect and what we will do in the future. We also learned a bit of SQL, Java, and JavaScript, as they are essential for creating a fully functional server. This knowledge will definitely be useful to me. ");
  };

  const tolearnClickHandler = (e) => {
    e.preventDefault();
    setDisp("This year, I want to learn more about web development because it interested me last year. I found web development a bit challenging but also fun, which encourages me to learn more about it. So this year, I want to learn how to create a perfect website and enhance my basic knowledge. year i want to learn more about Web Development as it interested me last year. For me I feel like web dev was a bit challenging but was also fun it encourages me to learn more about it. So this year i want to learn more on how to make a perfect website and to enhance more my basic knowledge. ");
  };

  const willlearnClickHandler = (e) => {
    e.preventDefault();
    setDisp("I will try my best to engage in advanced learning to help me understand my school subjects better. I will also seek advice from forums related to web development, as many experienced people participate there. Lastly, I will focus on my classes to truly understand what to do. ");
  };

  const genericClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (value === 'RESET') {
      setDisp('10 Things That Require Zero Talent');
      return;
    }

    const index = parseInt(value) - 1; 
    if (index >= 0 && index < items.length) {
      setDisp(items[index]);
    }
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <div>
          <NameHeader />
        </div>
        <div className="DispContainer">
          <Display display={disp} />
        </div>
        <div className="ButtonsContainer">
          {items.map((item, index) => (
            <Key key={index} label={index + 1} clickHandler={genericClickHandler} /> 
          ))}
          <Key label={"RESET"} clickHandler={genericClickHandler} />
          <Key label={"NAME"} clickHandler={nameClickHandler} />
          <Key label={"What I Learned?"} clickHandler={ilearnedClickHandler} />
          <Key label={"What I want to learn?"} clickHandler={tolearnClickHandler} />
          <Key label={"How will I learn?"} clickHandler={willlearnClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;

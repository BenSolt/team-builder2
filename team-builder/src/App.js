import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Data from './components/Data';
import TeamMember from './components/TeamMember';




function App() {

  const [member, setMember] = useState(Data);
  console.log(member);
  const addNewMember = member2 => {
setMember([...member, member2]);
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
        <Form addmember={addNewMember}/>
        <TeamMember memberList={member}/>
        



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

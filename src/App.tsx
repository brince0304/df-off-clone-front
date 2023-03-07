import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/application/layout/Header';
import Body from './components/application/layout/Body';

//부트스트랩


//다크모드 함수

function App() {

 const[characterName, setCharacterName] = useState<string>("");
  return (
    <div className="App">
        <Header title={"던파모아"}
        ></Header>
        <Body/>
    </div>
  );
}

export default App;

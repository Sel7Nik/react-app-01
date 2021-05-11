// import React from 'react';
import './App.css';

// function App() {
  const  App = () => {
  return <>
    <div className="App">
    <h1>HTML</h1> 
    <ul className="react__list">
      <li className="react__item">list 01</li>
      <li className="react__item">list 02</li>
      <li className="react__item">list 03</li>
      <li className="react__item">list 04</li>
    </ul>
    </div>
      <Abb></Abb>
    </>
  
}
  const  Abb = () => {
  return  <>
            <div className="Abb">
            <h1 className="h1" >Abb</h1> 
            <p>second compponent</p>
            </div>
          </>
}




export default App;

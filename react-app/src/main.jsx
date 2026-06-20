import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

// react expression

function Car (){
  return (
  <>
 <h1>My Car</h1>
 <p>It has {218 * 1.36} horsepower</p>

  </>
  );

  

}

//function call

function Kwtohp (kw){
  return kw * 1.36;

}
 function Car(){
  return (
    <>
    <h1> My car</h1>
    <p>It has {Kwtohp(218)} horsepower</p>
    </>
  )
 }

 // object properties

 function Car (){
  const myobj = {
    name:"Ford Mustang",
    model:"500",
    color:"Black"
  };
  return (
    <>
    <h1>My Car is {myobj.color} {myobj.name} {myobj.model}</h1>
    </>
  );
 }
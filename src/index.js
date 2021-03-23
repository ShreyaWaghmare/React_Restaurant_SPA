import React, { useState,useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
//hooks,test,routes,props,useState,useEffect, useReducer
function AppTwo() {
  
  // this uses a call back function
  // the [emotion] is a dependency array to log only once
  const [emotion,setEmotion] = useState("happy");
  const [semotion,setSEmotion] = useState("tired");
  const [checked,toggle] = useReducer(
    (checked) => !checked,
    false
  );
 
  console.log(emotion,semotion)
  
  useEffect(()=>{
    console.log(`It's ${emotion} around here!!!`);
  },[emotion]);
  
  useEffect(()=>{
    console.log(`It's ${semotion} around here!!!`);
  });
  
  return(
    <>
      <h1>Current State is {emotion} and {semotion}</h1>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setSEmotion("tired")}>Tired</button>
      <div id="review"><h3>Reviews:</h3></div>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked ? "loading reviews..." : ""}</p>
    </>
  );
}

function Footer(props) {
  return (
    <h5>Copyright {props.year}</h5>
  );
}

// to give variable name to each item in list-destructuring arrays mostly used for props
const [cuisines1,,cuisine2 ]= [
  'Indian chat',
  'Italian',
  'Chinese'
];
console.log(cuisines1,cuisine2)

ReactDOM.render(
  // can also be put as <> </>
  <React.Fragment>
    <Router>
    <App authorized={true} login="ShreyaWaghmare"/>
    <AppTwo />
    <Footer year={new Date().getFullYear()}/>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);


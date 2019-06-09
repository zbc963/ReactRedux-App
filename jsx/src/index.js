//import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';



// Create a react component
const App = function() {
    

    const buttonText = {text: 'Click Me'};
    return (
    <div>
    <label className="label" htmlFor="name">
        Enter Name: </label>
    <input id="name" type="text"/>
    <button style ={{color:'white',background:'blue'}}> {buttonText.text} </button>
  </div>);
};


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
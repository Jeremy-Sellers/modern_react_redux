//Import react and reactDom libraries
import React from "react";
import ReactDOM from 'react-dom/client';

//Get reference to div with ID of root
const rootElement = document.getElementById('root');

// Tell react to take control of element
const root = ReactDOM.createRoot(rootElement);

//Create componenet
let App = () => {
    let message = "Bye!";

    if (Math.random() > .5){
        message = "Hello!";
    }
    return (
        <h1>{message}</h1>
    )
}


//Show component on screen
root.render(<App />)
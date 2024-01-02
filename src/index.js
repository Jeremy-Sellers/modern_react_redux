//Import react and reactDom libraries
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import './App.css'

//Get reference to div with ID of root
const rootElement = document.getElementById('root');

// Tell react to take control of element
const root = ReactDOM.createRoot(rootElement);

//Create componenet
let Index = () => {
    return (
        <div className="app-wrapper">
            <App/>
        </div>

    )
}


//Show component on screen
root.render(<Index />)
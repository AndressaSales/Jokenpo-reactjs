import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './App.css';

class Frases extends React.Component{
    render(){
        return(
            <div>
                <App />
            </div>
        );
    }
}
ReactDOM.render(<Frases />, document.getElementById('root'));
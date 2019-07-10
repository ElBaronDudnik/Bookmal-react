import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HeaderComponent from "./components/header/HeaderComponent.jsx"
import FooterComponent from "./components/footer/FooterComponent.jsx";
import MainComponent from "./components/main/MainComponent.jsx";

const App = () => {
    return (
        <div className="main-container">
            <HeaderComponent />
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
};

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
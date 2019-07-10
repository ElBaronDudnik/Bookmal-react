import React from "react";
import ReactDOM from "react-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Burger from './components/Burger.jsx'
import NavComponent from "./components/NavComponent.jsx";

const HeaderComponent = () => {
    return (
        <header className="header">
            <Burger />
            <span className="header__logo">BOKM&#197L</span>
            <input type="checkbox" id="header__dropdown" className="header__dropdown-input" hidden />
            <label className="header__dropdown button" htmlFor="header__dropdown">Для усіх</label>

            <ul className="header__dropdown-menu">
                <li className="header__dropdown-item header__dropdown-item_active">
                    <a href="#" className="header__dropdown-link h3 h3_semi-bold">Для усіх</a></li>
                <li className="header__dropdown-item">
                    <a href="#" className="header__dropdown-link h3 h3_semi-bold">Baby side</a></li>
                <li className="header__dropdown-item">
                    <a href="#" className="header__dropdown-link h3 h3_semi-bold">Teen side</a></li>
            </ul>

            <NavComponent className = 'header__menu' links = {[{text: 'Про Букмоль', href : '#'}, {text: 'Співпраця', href : '#'}, {text: 'Підтримка', href : '#'}]} />
            <div className="header__icons">
                <MaterialIcon className="material-icons header__icon header__icon-search" icon="search" />
                <MaterialIcon className="material-icons header__icon header__icon-bookmark" icon="bookmark_border" />
            </div>
        </header>
    );
};


export default HeaderComponent;
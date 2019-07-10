import React from "react";
import ReactDOM from "react-dom";
import NavComponent from "./NavComponent.jsx";

const Burger = () => {
    return (
        <aside className="header__burger-menu burger-menu">
            <input type="checkbox" id="header__burger-menu-input" className="burger-menu__input" hidden />
            <label htmlFor="header__burger-menu-input" className="burger-menu__icon">
                <span className="burger-menu__icon-dash"></span>
                <span className="burger-menu__icon-dash"></span>
                <span className="burger-menu__icon-dash"></span>
                <span className="burger-menu__icon-dash"></span>
            </label>
            <NavComponent className = 'burger-menu__menu' links = {[
                                                        {text: 'Головна', href: '#'},
                                                        {text: 'Топ', href: '#'},
                                                        {text: 'Огляди', href: '#'},
                                                        {text: 'Корисні статті', href: '#'},
                                                        {text: 'Новини', href: '#'},
                                                        {text: 'Авторська колонка', href: '#'},
                                                        {text: 'Інтерактив', href: '#'},
                                                        {text: 'Літклуб', href: '#'},]}
            />

        </aside>
    );
}



export default Burger;
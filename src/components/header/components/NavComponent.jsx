import React from "react";
import ReactDOM from "react-dom";

const NavComponent = (props) => {
    return(
        <nav className={props.className}>
            <ul className={`${props.className}-container`} >
                {props.links.map((link, i) => {
                    return <li className={`${props.className}-item`}><a href={link.href}>{link.text}</a></li>
                })}
            </ul>
        </nav>
    );
}


export default NavComponent;
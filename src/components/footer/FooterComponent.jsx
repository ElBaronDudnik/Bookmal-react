import React from "react";
import ReactDOM from "react-dom";

const FooterComponent = () => {
    return(
        <footer className="footer grid">
            <div className="footer__subscribe">
                <p className="footer__text">Підписуйтесь на новини від Bokmal</p>
                <input className="footer__email" type="email" placeholder="E-Mail" required />
                    <button className="footer__submit submit">
                        <span className="arrow"></span>
                    </button>
            </div>
            <div className="footer__social">
                <p className="footer__text">Ми є у соціальних мережах</p>
                <nav className="footer__social-outer">
                    <ul className="footer__social-inner">
                        <li className="footer__social-icon"><a href="#" className="fb-icon"></a></li>
                        <li className="footer__social-icon"><a href="#" className="twitter-icon"></a></li>
                        <li className="footer__social-icon"><a href="#" className="insta-icon"></a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer__copyright">
                <p className="footer__text footer__text_small">2017 Букомоль. Незалежний культурний проект для дітей,
                    їхніх батьків та усіх-усіх небайдужих й охочих до читання. Всі права захищені.
                    Використання будь-яких матеріалів, розміщення на сайті, дозволяється за умови
                    посилання на Bokmal.com.ua
                </p>
            </div>
        </footer>
    );
}

export default FooterComponent;
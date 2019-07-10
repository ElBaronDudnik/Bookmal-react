import React from "react";
import ReactDOM from "react-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import Diary_img from '../../../img/diary.jpg';

const ArticlesItem = (props) => {
    return(
        <figure className={`${props.type}__item`}>
            <p className={`tag ${props.type}__tag`}>Поради</p>
            <img src={Diary_img} alt={`${props.type} picture`} className={`${props.type}__image`} />
                <figcaption className={`${props.type}__description description-box`}>
                    <div className={`${props.type}__date-and-view info-field`}>
                        <div className={`${props.type}__date info-field__data`}>
                            <MaterialIcon className="material-icons info-field__icon" icon="calendar_today"/>
                            <span className="info-field__text">1 Жовтня, 2017</span>
                        </div>
                        <div className={`${props.type}__views info-field__views`}>
                            <MaterialIcon className="material-icons info-field__icon" icon="remove_red_eye"/>
                            <span className="info-field__text">980</span>
                        </div>
                    </div>
                    <h2 className="description-box__heading h2_extra-bold">"Любий щоденнику...": ваш "настільний" психоаналітик</h2>
                    <button className={`${props.type}__button button`}>Читати</button>
                    <span className={`${props.type}__bookmark bookmark`}></span>
                </figcaption>
        </figure>
    );
}

export default ArticlesItem;
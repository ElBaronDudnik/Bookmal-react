import React from "react";
import MaterialIcon, {colorPalette} from 'material-icons-react';

const ArticlesItem = (props) => {
    let {type, title, date, views, img, description, descriptionBox} = props;
    let className = descriptionBox ? `${type}__description description-box` : `${type}__description`;
    console.log(type);
    return(
        <figure className={`${type}__item`}>
            <p className={`tag ${type}__tag`}>{title}</p>
            <img src={img} alt={`${type} picture`} className={`${type}__image`} />
                <figcaption className = {className}>
                    <div className={`${type}__date-and-view info-field`}>
                        <div className={`${type}__date info-field__data`}>
                            <MaterialIcon className="material-icons info-field__icon" icon="calendar_today"/>
                            <span className="info-field__text">{date}</span>
                        </div>
                        <div className={`${type}__views info-field__views`}>
                            <MaterialIcon className="material-icons info-field__icon" icon="remove_red_eye"/>
                            <span className="info-field__text">{views}</span>
                        </div>
                    </div>
                    {type == 'main-article'?
                        (<h1 className="main-article__heading h1">Тварини Патріка Джорджа:<br />врятуй їх усіх</h1>):
                        (<h2 className="description-box__heading h2_extra-bold">{description}</h2>)}
                    <button className={`${type}__button button`}>Читати</button>
                    <span className={`${type}__bookmark bookmark`}></span>
                </figcaption>
        </figure>
    );
}

export default ArticlesItem;
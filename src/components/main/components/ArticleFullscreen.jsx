import React from "react";
import ArticlesItem from "./ArticlesItem.jsx";
import Diary_img from '../../../img/diary.jpg';

const ArticleFullscreen = () => {
    return(
        <article className = "article-fullscreen grid">
            <ArticlesItem type = "article-fullscreen"
                          title = "Поради"
                          date = "1 жовтня, 2017"
                          views = "980"
                          img = {Diary_img}
                          description = "'Любий щоденнику...': ваш 'настільний' психоаналітик"
                          descriptionBox = {true}
            />
        </article>
    );
}

export default ArticleFullscreen;
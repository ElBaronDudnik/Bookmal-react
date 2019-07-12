import React from "react";
import ArticleItem  from "./ArticlesItem.jsx"
import FirstBg from "../../../img/first_screen_bg.jpg";

const MainArticle = () => {
    return(
        <article className="main-article grid">
            <ArticleItem type = "main-article"
                         title = "Корисні статтіі"
                         date = "1 жовтня, 2017"
                         views = "980"
                         img = {FirstBg}
                         description = "Тварини Патріка Джорджа: врятуй їх усіх"
                         descriptionBox = {true}/>
        </article>
    )
}

export default MainArticle;
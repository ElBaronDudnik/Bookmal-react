import React from "react";
import ArticlesItem from './ArticlesItem.jsx'
import SixStories from "../../../img/six_stories.jpg";

const ArticleSkew = () => {
    return(
        <article className="article-skew article-skew_left grid">
            <ArticlesItem type='article-skew'
                          title = "Огляди"
                          date = "1 жовтня, 2017"
                          views = "980"
                          img = {SixStories}
                          description = "Шість пригодницьких історій для літнього читання"
                          descriptionBox = {true}/>
        </article>
    );
}

export default ArticleSkew;
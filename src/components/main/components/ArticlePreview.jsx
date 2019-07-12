import React from "react";
import ArticlesItem from './ArticlesItem.jsx'
import Img1 from '../../../img/item1.png';
import Img2 from '../../../img/item2.png';
import Img3 from '../../../img/item3.png';

const ArticlePreview = () => {
    return(
        <article className="articles-preview grid">
            <div className="articles-preview__parent">
                <ArticlesItem type='articles-preview'
                              title = "Корисні статті"
                              date = "1 жовтня, 2017"
                              views = "980"
                              img = {Img1}
                              description = "Найкращі дитячі ілюстратори незалежної України"
                              descriptionBox = {false}/>
                <ArticlesItem type='articles-preview'
                              title = "Афіша"
                              date = "1 жовтня, 2017"
                              views = "980"
                              img = {Img2}
                              description = "Вихідні з дітьми: 9-10 вересня"
                              descriptionBox = {false}/>
                <ArticlesItem type='articles-preview'
                              title = "Літклуб"
                              date = "1 жовтня, 2017"
                              views = "980"
                              img = {Img3}
                              description = "Літклуб Букмоль: розклад на квітень"
                              descriptionBox = {false}/>
            </div>
        </article>
    );
}

export default ArticlePreview;
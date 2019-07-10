import React from "react";
import ReactDOM from "react-dom";
import ArticlesItem from './ArticlesItem.jsx'

const ArticlePreview = () => {
    return(
        <article className="articles-preview grid">
            <div className="articles-preview__parent">
                <ArticlesItem type='articles-preview'/>
                <ArticlesItem type='articles-preview'/>
                <ArticlesItem type='articles-preview'/>
            </div>
        </article>
    );
}

export default ArticlePreview;
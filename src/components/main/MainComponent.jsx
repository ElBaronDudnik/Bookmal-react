import React from "react";
import ReactDOM from "react-dom";
import ArticleSkew from './components/ArticleSkew.jsx'
import ArticleFullscreen from './components/ArticleFullscreen.jsx'
import ArticlePreview from './components/ArticlePreview.jsx'

const MainComponent = () => {
    return(
        <main>
            <ArticlePreview />
            <ArticleFullscreen />
        </main>
    );
}

export default MainComponent;
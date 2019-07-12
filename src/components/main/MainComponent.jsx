import React from "react";
import Filter from "./components/FilterComponent.jsx"
import ArticleSkew from './components/ArticleSkew.jsx'
import ArticleFullscreen from './components/ArticleFullscreen.jsx'
import ArticlePreview from './components/ArticlePreview.jsx'
import ArticleMain from './components/ArticleMain.jsx'

const MainComponent = () => {
    return(
        <main>
            <ArticleMain />
            <Filter />
            <ArticleSkew />
            <ArticlePreview />
            <ArticleFullscreen />
        </main>
    );
}

export default MainComponent;
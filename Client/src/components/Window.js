import {useState} from "react";
import ArticleWindow from "./ArticleWindow";
import Cards from "./Cards";
import {get_articles} from "../scripts/utils";

// const articles_loaded = false;


function Window(props)
{
    const [display_article, setDisplay_article] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [article, setArticle] = useState({});
    const [articles, setArticles] = useState(get_articles(props));


    if (display_article)
    {
        // Add the path to the url
        window.history.pushState({}, "", "/articles/view/" + 2);
        return <ArticleWindow article={article} setArticle={setArticle} setDisplay_article={setDisplay_article}/>;
    }

    else
    {
        // Add the path to the url
        window.history.pushState({}, "", "/");
        return <Cards isMounted={isMounted}
                      setIsMounted={setIsMounted}
                      article={article}
                      setArticle={setArticle}
                      articles={articles}
                      setArticles={setArticles}
                      display_article={display_article}
                      setDisplay_article={setDisplay_article}
        />;
    }
}


export default Window
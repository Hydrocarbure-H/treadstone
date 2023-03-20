import {useState} from "react";
import ArticleWindow from "./ArticleWindow";
import Cards from "./Cards";

// const articles_loaded = false;


function Window(props)
{
    const [display_article, setDisplay_article] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [article, setArticle] = useState({});
    const [articles, setArticles] = useState([{}]);


    if (display_article)
    {
        return <ArticleWindow article={article}/>;
    }

    else
    {
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
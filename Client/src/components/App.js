import '../styles/App.css';
import './Window.js';
import Window from "./Window";

import '../styles/window.css';
import '../styles/sidebar.css';
import '../styles/card.css';
import '../styles/title.css';
import '../styles/article.css';

import {useState} from 'react'

function App()
{
    const [display_article, setDisplay_article] = useState(false);
    const [article, setArticle] = useState("");
    const [articles, setArticles] = useState([{}]);

    return <div className="container">
        <Window display_article={display_article} article={article} setDisplay_article={setDisplay_article}
                setArticle={setArticle} articles={articles} setArticles={setArticles}/>
    </div>
}

export default App;

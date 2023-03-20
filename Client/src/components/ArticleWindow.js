import Article from "./Article";

/**
 * Go back to the cards
 * @param props
 */
function handleGoBack(props)
{
    props.setArticle({});
    props.setDisplay_article(false);
}

/**
 * Display article (called by handleArticle)
 * @returns {JSX.Element}
 * @param props
 */
function ArticleWindow(props)
{
    const e = props.article;
    return <div className="window-article">
        <Article content={e.content} title={e.title} subtitle={e.subtitle} setArticle={props.setArticle}
                 setDisplay_article={props.setDisplay_article}
                 goBackFunction={handleGoBack}/>
    </div>
}

export default ArticleWindow;
import Article from "./Article";

/**
 * Go back to the cards
 * @param e
 */
function handleGoBack(props)
{
    props.setArticle({});
    props.setDisplay_article(false);
}

/**
 * Display article (called by handleArticle)
 * @param e
 * @returns {JSX.Element}
 */
function ArticleWindow(props)
{
    const e = props.article;
    return <div className="window-article">
        <Article contentValue={e.content} titleValue={e.title} subtitleValue={e.subtitle}
                 goBackFunction={handleGoBack}/>
    </div>
}

export default ArticleWindow;
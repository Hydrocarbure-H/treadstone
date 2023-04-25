/**
 * Get articles from the server
 * @returns {null}
 */
async function get_articles(props)
{
    let articles = fetch("http://127.0.0.1:5000/articles")
        .then(response => response.json())
        .catch(error =>
        {
            articles = [
                {
                    "title": "Oh no...",
                    "subtitle": "Error - Server error",
                    "content": "It seems that the server is not responding. Please try again later."
                }
            ]
        });
    return articles;
}

/**
 * Get article from server
 * @param e
 */
function handleArticle(props)
{
    let article = null;

    fetch("http://127.0.0.1:5000/articles/view/" + props.id)
        .then(response => response.json())
        .then(data =>
        {
            props.setArticle(data[0]);
            props.setDisplay_article(true);

        })
        .catch(error =>
        {
            article = {
                "title": "Oh no...",
                "subtitle": "Error - Server error",
                "content": "It seems that the server is not responding. Please try again later."
            }
        });

    return article;
}

export {
    get_articles,
    handleArticle
};
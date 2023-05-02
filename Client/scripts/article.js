export function display_article(article)
{
    // Clear the content of the container div
    document.getElementById("container").innerHTML = "";

    // Create the article div
    const article_div = document.createElement("div");
    article_div.id = "article";
    article_div.className = "article-window";
    // add the article.css file

    const link = document.createElement("link");
    link.href = "../styles/article.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
}


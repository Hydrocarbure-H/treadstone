import {get_articles} from "./fetch.js";

export function display_article(article)
{
    // Clear the content of the container div
    document.getElementById("container").innerHTML = "";
    const link = document.createElement("link");
    link.href = "../styles/article.css";
    link.rel = "stylesheet";

    document.head.appendChild(link);
    let window_article = document.createElement("div");
    window_article.className = "window-article";
    let close_button = document.createElement("div");
    close_button.className = "close-button";
    let close_button_img = document.createElement("img");
    close_button_img.src = "../assets/design/back.svg";
    close_button_img.alt = "back";
    close_button.appendChild(close_button_img);
    let article_div = document.createElement("div");
    article_div.className = "article";
    let miniature_div = document.createElement("div");
    miniature_div.className = "miniature";
    let miniature_img = document.createElement("img");
    miniature_img.src = "../assets/images/logo192.png";
    miniature_img.alt = "miniature";
    miniature_div.appendChild(miniature_img);
    let article_title = document.createElement("div");
    article_title.className = "article-title";
    article_title.innerHTML = article.title;
    let article_subtitle = document.createElement("div");
    article_subtitle.className = "article-subtitle";
    article_subtitle.innerHTML = article.subtitle;
    let article_content = document.createElement("div");
    article_content.className = "article-content";
    article_content.innerHTML = article.content;
    article_div.appendChild(miniature_div);
    article_div.appendChild(article_title);
    article_div.appendChild(article_subtitle);
    article_div.appendChild(article_content);
    window_article.appendChild(close_button);
    window_article.appendChild(article_div);
    document.getElementById("container").appendChild(window_article);

    // add the close button event listener
    close_button.addEventListener("click", function ()
    {
        // Clear the content of the container div
        document.getElementById("container").innerHTML = "";
        // remove the article.css file from the head
        document.head.removeChild(link);
        let window = document.createElement("div");
        window.className = "window";
        window.id = "cards";
        let title = document.createElement("div");
        title.className = "title";
        title.innerHTML = "Treadstone.fr";
        window.appendChild(title);
        document.getElementById("container").appendChild(window);
        get_articles();

    });
}


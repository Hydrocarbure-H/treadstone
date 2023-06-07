import {create_cards} from "./cards.js";

export function get_articles()
{
    const response = get_request("/articles");
    response.onload =
        function ()
        {
            const articles = JSON.parse(this.responseText);
            create_cards(articles[0]);
        };
}

export function get_request(endpoint)
{
    const url = "http://127.0.0.1:5000" + endpoint;
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.send();
    return xhr;
}
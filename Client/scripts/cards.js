import {display_article} from "./article.js";

export function create_cards(cards_list)
{
    // Create cards
    for (let i = 0; i < cards_list.length; i++)
    {
        const card = create_card(cards_list[i]);
        document.getElementById("cards").appendChild(card);
    }
}

export function create_card(card)
{
    // Create card

    const card_div = document.createElement("div");
    card_div.className = "card";
    card_div.onclick = function ()
    {
        display_article(card);
    };

    card.description = card.description.replace(/<h1.*?>.*?<\/h1>/, "").replace(/<h2.*?>.*?<\/h2>/, "").replace(/<.*?>/g, "");

    const miniature_div = document.createElement("div");
    miniature_div.className = "miniature";
    const miniature_img = document.createElement("img");
    miniature_img.src = card.image;
    miniature_img.alt = "miniature";
    miniature_div.appendChild(miniature_img);

    const card_title = document.createElement("div");
    card_title.className = "card-title";
    card_title.innerHTML = card.title;

    const card_subtitle = document.createElement("div");
    card_subtitle.className = "card-subtitle";
    card_subtitle.innerHTML = card.subtitle;

    const card_description = document.createElement("div");
    card_description.className = "card-description";
    card_description.innerHTML = card.description;

    card_div.appendChild(miniature_div);
    card_div.appendChild(card_title);
    card_div.appendChild(card_subtitle);
    card_div.appendChild(card_description);

    return card_div;
}
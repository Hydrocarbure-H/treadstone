import Card from "./Card";
import Title from "./Title";
import {get_articles, handleArticle} from "../scripts/utils";
import {useEffect} from "react";

const title = "Treadstone";
const subtitle = "A new kind of intelligence";

function Cards(props)
{

    // props.setIsMounted(true);
    useEffect(() =>
        {
            props.setArticles(get_articles(props).then(data => props.setArticles(data)));
        },
        [props.setArticles]
    );

    //convert articles into string

    let cards = [];
    if (props.articles != null)
    {
        for (let i = 0; i <= props.articles.length; i++)
        {
            cards.push(<Card key={i} title={props.articles[0][i].title}
                             subtitle={props.articles[0][i].subtitle}
                             description={props.articles[0][i].description}
                             id={props.articles[0][i].id}
                             onClickFunction={handleArticle}
                             setArticle={props.setArticle}
                             setDisplay_article={props.setDisplay_article}
            />);
        }
    }

    // return the window with the list of articles
    return <div className="window">
        <Title titleValue={title} subtitleValue={subtitle}/>
        {cards}
    </div>
}

export default Cards;
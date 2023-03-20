import Card from "./Card";
import Title from "./Title";
import {get_articles, handleArticle} from "../scripts/utils";
import {useEffect} from "react";

const title = "Treadstone";
const subtitle = "A new kind of intelligence";

function Cards(props)
{

    props.setIsMounted(true)
    useEffect(() =>
        {
            if (!props.isMounted)
            {
                props.setIsMounted(true);
                props.setArticles(get_articles(props));
            }
        },
        [props.isMounted]
    );

    let cards = [];
    if (props.articles != null)
    {
        for (let i = 0; i < props.articles.length; i++)
        {
            cards.push(<Card key={i} titleValue={props.articles[i].title}
                             subtitleValue={props.articles[i].subtitle}
                             descriptionValue={"test"}
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
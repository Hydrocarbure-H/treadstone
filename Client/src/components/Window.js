import Title from "./Title";
import Article from "./Article";
import Card from "./Card";

const lorem = "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl.Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl.";
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl";
const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.";
const lorem4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl";

const title = "Treadstone";
const subtitle = "A new kind of intelligence";

function Window(props)
{

    const display_article = props.display_article;
    const article = props.article;
    const articles = props.articles;

    /* use state to display article */

    if (display_article)
    {
        return display_article_f(article);
    }

    else
    {
        return display_cards(articles);
    }

    function handleArticle(e)
    {
        var article = null;

        fetch("http:///127.0.0.1:5000/articles/view/" + 1)
            .then(response => response.json())
            .then(data =>
            {
                article = data[0];

                // Change the state
                props.setArticle(article);
            })
            .catch(error =>
            {
                article = {
                    "title": "Oh no...",
                    "subtitle": "Error - Server error",
                    "content": "It seems that the server is not responding. Please try again later."
                }
                props.setArticle(article);
            });

        props.setDisplay_article(true);
    }

    function handleGoBack(e)
    {
        props.setArticle({});
        props.setDisplay_article(false);
    }


    function display_article_f(e)
    {
        return <div className="window-article">
            <Article contentValue={e.content} titleValue={e.title} subtitleValue={e.subtitle}
                     goBackFunction={handleGoBack}/>
        </div>
    }

    function get_articles()
    {
        var articles = null;

        fetch("http://127.0.0.1:5000/articles")
            .then(response => response.json())
            .then(data =>
                {
                    articles = data;
                    props.setArticles(articles);
                }
            )
            .catch(error =>
            {
                articles = [
                    {
                        "title": "Oh no...",
                        "subtitle": "Error - Server error",
                        "content": "It seems that the server is not responding. Please try again later."
                    }
                ]
                props.setArticles(articles);
            });
        return articles;
    }

    function display_cards(articles)
    {
        console.log("Articles " + articles);

        get_articles();

        let cards = [];

        for (let i = 0; i < articles.length; i++)
        {
            cards.push(<Card titleValue={articles[i].title} subtitleValue={articles[i].subtitle}
                             descriptionValue={lorem2}
                             onClickFunction={handleArticle}/>);
        }

        // return the window with the list of articles
        return <div className="window">
            <Title titleValue={title} subtitleValue={subtitle}/>
            {cards}
        </div>

    }

}

export default Window
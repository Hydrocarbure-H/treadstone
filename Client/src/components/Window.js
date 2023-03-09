import Card from './Card'
import Title from "./Title";
import Article from "./Article";


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

    /* use state to display article */

    if (display_article)
    {
        return display_article_f(article);
    }

    else
    {
        return display_cards();
    }

    function handleArticle(e)
    {
        var article = null;
        fetch("http://127.0.0.1:5000/articles/view/" + 1)
            .then(response => response.json())
            .then(data =>
            {
                article = data[0];
                console.log(article)

                // Change the state
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

    function display_cards()
    {
        return <div className="window">
            <Title titleValue={title} subtitleValue={subtitle}/>
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem2} titleValue={title} subtitleValue={subtitle}
                  onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem3} titleValue={title} subtitleValue={subtitle}
                  onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem4} titleValue={title} subtitleValue={subtitle}
                  onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem2} titleValue={title} subtitleValue={subtitle}
                  onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem3} titleValue={title} subtitleValue={subtitle}
                  onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem4} titleValue={title} subtitleValue={subtitle}
                  onClickFunction={handleArticle}/>
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} onClickFunction={handleArticle}/>
        </div>
    }

}

export default Window
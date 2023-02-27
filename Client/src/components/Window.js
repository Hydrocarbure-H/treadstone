import Card from './Card'
import Title from "./Title";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl.";
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl";
const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.";
const lorem4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl";

const title = "Treadstone";
const subtitle = "A new kind of intelligence";

function Window(props) {

    const display_article = props.display_article;
    const article = props.article;

    /* use state to display article */

    if (display_article) {
        return display_article_f();
    }

    else {
        return display_cards();
    }

    function handleClick(e) {
        console.log("clicked " + e);
        props.setArticle(e);
        props.setDisplay_article(true);
    }

    function display_article_f() {
        return <div className="window">
            <Title titleValue={title} subtitleValue={subtitle} />

        </div>
    }


    function display_cards() {
        return <div className="window">
            <Title titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} onClickFunction={handleClick} />
            <Card descriptionValue={lorem2} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem3} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem4} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem2} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem3} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem4} titleValue={title} subtitleValue={subtitle} />
            <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} />
        </div>
    }

}

export default Window
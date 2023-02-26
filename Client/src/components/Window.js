import Card from './Card'
import Title from "./Title";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl.";
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl";
const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.";
const lorem4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl";

const title = "Treadstone";
const subtitle = "A new kind of intelligence";

function Window()
{
    return <div className="window">
        <Title titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle} onClicked={() =>
        {
            console.log("clicked");
            return <div>test</div>
        }}/>
        <Card descriptionValue={lorem2} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem3} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem4} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem2} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem3} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem4} titleValue={title} subtitleValue={subtitle}/>
        <Card descriptionValue={lorem} titleValue={title} subtitleValue={subtitle}/>
    </div>
}

export default Window
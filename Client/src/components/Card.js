import logo from '../logo.svg';

function Card(props)
{
    // Remove the first H1 tag
    // And remove all the HTML tags

    const description = props.description.replace(/<h1.*?>.*?<\/h1>/, "").replace(/<.*?>/g, "");
    const title = props.title;
    const subtitle = props.subtitle;
    const onClickFunction = props.onClickFunction;

    return (
        <div className="card"
             onClick={
                 () => onClickFunction(props)
             }>
            <div className="miniature"><img src={logo} alt='miniature'/></div>
            <div className="card-title">{title}</div>
            <div className="card-subtitle">{subtitle}</div>
            <div className="card-description">{description}</div>
        </div>
    )
}

export default Card
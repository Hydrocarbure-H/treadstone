import logo from '../logo.svg';

function Card(props) {
    const description = props.descriptionValue;
    const title = props.titleValue;
    const subtitle = props.subtitleValue;
    const onClickFunction = props.onClickFunction;


    return (
        <div className="card" onClick={() => onClickFunction(title)}>
            <div className="miniature"><img src={logo} alt='miniature' /></div>
            <div className="card-title">{title}</div>
            <div className="card-subtitle">{subtitle}</div>
            <div className="card-description">{description}</div>
        </div >
    )
}

export default Card
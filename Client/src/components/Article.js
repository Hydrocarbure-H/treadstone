import logo from '../logo.svg';

function Article(props) {
    const content = props.contentValue;
    const title = props.titleValue;
    const subtitle = props.subtitleValue;

    return (
        <div className="article">
            <div className="miniature"><img src={logo} alt='miniature' /></div>
            <div className="article-title">{title}</div>
            <div className="article-subtitle">{subtitle}</div>
            <div className="article-content">{content}</div>
        </div >
    )
}

export default Article
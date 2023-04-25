import logo from '../logo.svg';
import back_button from '../back.svg';

function Article(props)
{
    // Use dangerouslySetInnerHTML to render the content as HTML
    const content = {__html: props.content};

    const title = props.title;
    const subtitle = props.subtitle;
    const onClickFunction = props.goBackFunction;
    
    return (
        <div>
            <div className='close-button' onClick={() => onClickFunction(props)}>
                <img src={back_button} alt='back'/>
            </div>
            <div className="article">
                <div className="miniature"><img src={logo} alt='miniature'/></div>
                <div className="article-title">{title}</div>
                <div className="article-subtitle">{subtitle}</div>
                <div className="article-content" dangerouslySetInnerHTML={content}/>
            </div>
        </div>
    )
}

export default Article
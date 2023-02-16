import logo from '../logo.svg';

function Card(props) {
    const lorem = props.loremValue;
    return (
        <div className="card">
            <div className="miniature"><img src={logo} alt='miniature' /></div>
            <div className="card-title">Treadstone</div>
            <div className="card-subtitle">A new kind of intelligence</div>
            <div className="card-description">{lorem}</div>
        </div>
    )
}

export default Card
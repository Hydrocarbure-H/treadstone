import logo from '../logo.svg';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.";
function Card() {
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
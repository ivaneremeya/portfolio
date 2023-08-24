import './Card.css';

function Card(prop) {
    const classss = "card " + prop.className
    return <div className={classss}>{prop.children}</div>
}

export default Card
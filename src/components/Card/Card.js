import './Card.scss';

const Card = (props) => {
    const {img, title, price, itemID} = props;
    return (
        <a href="#" className="card" data-id={itemID}>
            <div className="card-img">
                <img src={img} alt="product" />
            </div>
            <h3 className="card-title">{title}</h3>
            <div className="card-price">
                <strong>{`${price.amount}$`}</strong>
            </div>
        </a>
    )
}

export default Card;
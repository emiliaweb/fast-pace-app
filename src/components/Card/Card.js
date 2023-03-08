import { Link } from 'react-router-dom';

import './Card.scss';

const Card = (props) => {
    const {img, title, price, itemID} = props;
    return (
        <Link to={`/catalog/${itemID}`} className="card" data-id={itemID}>
            <div className="card-img">
                <img src={img} alt="product" />
            </div>
            <h3 className="card-title">{title}</h3>
            <div className="card-price">
                <strong>{`${price.amount}$`}</strong>
            </div>
        </Link>
    )
}

export default Card;
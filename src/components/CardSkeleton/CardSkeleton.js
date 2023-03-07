import './CardSkeleton.scss';

const CardSkeleton = (props) => {
    const {itemID} = props;
    return (
        <div className="card skeleton" data-id={itemID}>
            <div className="card-img skeleton-block"></div>
            <div className="card-title skeleton-block"></div>
            <div className="card-price skeleton-block"></div>
        </div>
    )
}

export default CardSkeleton;
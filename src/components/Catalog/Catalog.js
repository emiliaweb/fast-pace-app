import Card from '../Card/Card';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

import './Catalog.scss';

const Catalog = ({products, loading}) => {
    const renderProducts = () => {
        return products.map(item => (
            <Card 
                key={item.id}
                title={item.title}
                price={item.price}
                img={item.imageURL} />
        ));
    }

    const cards = renderProducts();
    const skeleton = loading ? <CardSkeleton /> : null;

    return (
        <div className="catalog">
            <div className="container catalog-wrap">
                {skeleton}
                {cards}
            </div>
        </div>
    )
}

export default Catalog;
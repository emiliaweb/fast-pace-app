import { motion } from 'framer-motion';

import Card from '../Card/Card';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

import './Catalog.scss';

const Catalog = ({products, loading, error}) => {
    const renderProducts = () => {
        return products.map((item, i) => (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: (i) * 0.2}}}>
                <Card 
                    key={item.id}
                    itemID={item.id}
                    title={item.title}
                    price={item.price}
                    img={item.imageURL} />
            </motion.div>
        ));
    }

    const errorMsg = error ? <ErrorMsg /> : null;
    const cards = !(error || loading) ? renderProducts() : [];
    const skeleton = loading ? <CardSkeleton /> : null;
    const message = cards.length === 0 && !(error || loading) ? <div className='body-text'>No products available</div> : null;

    return (
        <div className="catalog">
            <div className="container catalog-wrap">
                {errorMsg}
                {cards}
                {skeleton}
                {message}
            </div>
        </div>
    )
}

export default Catalog;
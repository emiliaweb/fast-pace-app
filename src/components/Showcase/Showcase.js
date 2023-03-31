import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Card from '../Card/Card';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import { randomNumber } from '../../services/functions';
import useFPService from '../../services/FPService';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

import './Showcase.scss';

const Showcase = ({title, btnText}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getAllProducts, error } = useFPService();

    const getRandomProducts = () => {
        setLoading(true);
        getAllProducts()
            .then(onProductsLoaded)
            .then(data => {
                setProducts(data)
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    }

    const onProductsLoaded = data => {
        const temp = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = randomNumber(0, data.length);
            if (!temp.some(item => item.id === data[randomIndex].id)) { // добавить если текущего случайного продукта еще нет в массиве
                temp.push(data[randomIndex]);
            } else {
                i--;
            }
        }
        return temp;
    }

    useEffect(() => {
        setTimeout(() => {
            getRandomProducts();
        }, 1500)
    }, []);

    const renderProducts = () => {
        return products.map((item, i) => (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {delay: (i%4) * 0.5}}}
                key={item.id}>
                <Card 
                    itemID={item.id}
                    title={item.title}
                    price={item.price}
                    img={item.imageURL} />
            </motion.div>
        ));
    }

    const errorMsg = error ? <ErrorMsg /> : null;
    const cards = !(error || loading) ? renderProducts() : null;
    const skeleton = loading ? <CardSkeleton /> : null;

    const defaultTitle = <><span>Latest</span> arrival</>;
    const defaultBtnText = 'See more in catalog';

    return (
        <section className="showcase spacer-100">
            <div className="container">
                <h2 className="title title--medium">{title || defaultTitle}</h2>
                <div className="showcase-grid">
                    {errorMsg}
                    {skeleton}
                    {cards}
                </div>
                <Link to="/catalog" className="arrow-link showcase-link">{btnText || defaultBtnText}</Link>
            </div>
        </section>
    )
}

export default Showcase;
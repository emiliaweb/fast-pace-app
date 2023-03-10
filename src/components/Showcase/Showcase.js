import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import { randomNumber } from '../../services/functions';
import useFPService from '../../services/FPService';

import './Showcase.scss';

const Showcase = ({title, btnText}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getAllProducts } = useFPService();

    const getRandomProducts = () => {
        setLoading(true);
        getAllProducts()
            .then(onProductsLoaded)
            .then(data => {
                setProducts(data)
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
        return products.map(item => (
            <Card 
                key={item.id}
                itemID={item.id}
                title={item.title}
                price={item.price}
                img={item.imageURL} />
        ));
    }

    const cards = renderProducts();
    const skeleton = loading ? <CardSkeleton /> : null;

    const defaultTitle = <><span>Latest</span> arrival</>;
    const defaultBtnText = 'See more in catalog';

    return (
        <section className="showcase spacer-100">
            <div className="container">
                <h2 className="title title--medium">{title ? title : defaultTitle}</h2>
                <div className="showcase-grid">
                    {skeleton}
                    {cards}
                </div>
                <Link to="/catalog" className="arrow-link showcase-link">{btnText ? btnText : defaultBtnText}</Link>
            </div>
        </section>
    )
}

export default Showcase;
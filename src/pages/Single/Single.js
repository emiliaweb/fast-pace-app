import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Showcase from '../../components/Showcase/Showcase';
import Modal from '../../components/Modal/Modal';
import useFPService from '../../services/FPService';
import Spinner from '../../components/Spinner/Spinner';

import './Product.scss';

import arrow from './arrow-right-light.svg';

const Single = () => {
    const { productID } = useParams();
    const { getProduct } = useFPService();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [isActiveModal, setIsActiveModal] = useState(false);

    const getSingleProduct = async () => {
        setLoading(true);
        await getProduct(productID)
            .then(data => {
                setTimeout(() => {
                    setProduct(data);
                    setLoading(false);
                }, 1000)
            });
    }

    useEffect(() => {
        getSingleProduct();
    }, [productID]);

    const {id, imageURL, title, description, color, price, isAvailable} = product;

    const onOrder = (e) => {
        e.preventDefault();
        setIsActiveModal(true);
    }

    const onCloseModal = (target) => {
        if (target.classList.contains('modal-overlay')) {
            setIsActiveModal(false);
        }
    }

    const spinner = loading ? <div className="product-spinner"><Spinner /></div> : null;
    const content = loading ? 
    null : 
    <View 
        id={id}
        imageURL={imageURL}
        title={title}
        description={description}
        color={color}
        price={price} 
        onOrder={onOrder} />;

    return (
        <>
            <div className="path spacer-170">
                <div className="container">
                    <Link to="/catalog/" className="path-link">Catalog</Link><a href="#" className="path-link path-link--current">{title ? title : '...'}</a>
                </div>
            </div>

            {spinner}
            {content}

            <Portal>
                { isActiveModal ? 
                    <Modal 
                        product={title} 
                        productID={id}
                        price={`${price ? price.amount : null}$`}
                        onCloseModal={onCloseModal} /> 
                : null }
            </Portal>

            <Showcase title={<><span>Other</span> products</>} btnText={'Back to catalog'} />
        </>
    )
} 

const Portal = (props) => {
    return ReactDOM.createPortal(props.children, document.body);
}

const View = ({id, imageURL, title, description, color, price, onOrder}) => {
    return (
        <div className="product" data-id={id}>
            <div className="container">
                <div className="product-grid">
                    <div className="product-side">
                        <div className="product-img">
                            <img src={imageURL} alt="Sneakers" />
                        </div>
                    </div>
                    <div className="product-side product-info">
                        <h1 className="title title--medium product-title">{title}</h1>
                        <div className="body-text product-descr">{description}</div>
                        <div className="product-wrap">
                            <div className="product-price">{`${price ? price.amount : null}$`}</div>
                            <div className="product-color">
                                Color:
                                <div className="product-swatch" data-color={color} aria-label={color}>
                                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline" />
                                        <circle cx="22.5" cy="22.5" r="15.5" fill={color} className="swatch" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="btn product-btn btn--primary"
                            onClick={onOrder}>
                            Order now
                            <img src={arrow} alt="Arrow pointing to the right" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single;
import Showcase from '../../components/Showcase/Showcase';

import './Product.scss';

import img from './product-4.jpg';
import arrow from './arrow-right-light.svg';

const Single = () => {
    return (
        <>
            <div className="path spacer-170">
                <div className="container">
                    <a href="#" className="path-link">Catalog</a><a href="#" className="path-link path-link--current">Nike Air 50 Sneakers</a>
                </div>
            </div>

            <div className="product">
                <div className="container">
                    <div className="product-grid">
                        <div className="product-side">
                            <div className="product-img">
                                <img src={img} alt="Sneakers" />
                            </div>
                        </div>
                        <div className="product-side product-info">
                            <h1 className="title title--medium product-title">Nike Air 50 Sneakers</h1>
                            <div className="body-text product-descr">Explore our catalog and find your best fit. Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
                            <div className="product-wrap">
                                <div className="product-price">76.00$</div>
                                <div className="product-color">
                                    Color: 
                                    <div className="product-swatch" data-color="blue" aria-label="blue">
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                                            <circle cx="22.5" cy="22.5" r="15.5" fill="blue" className="swatch"/>
                                        </svg>                        
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn product-btn btn--primary">
                                Order now
                                <img src={arrow} alt="Arrow pointing to the right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Showcase />
        </>
    )
}

export default Single;
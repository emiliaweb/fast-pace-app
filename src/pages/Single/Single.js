import Showcase from '../../components/Showcase/Showcase';

import './Product.scss';

import img from './product-4.jpg';
import arrow from './arrow-right-light.svg';

const Single = () => {
    return (
        <>
            <div class="path spacer-170">
                <div class="container">
                    <a href="#" class="path-link">Catalog</a><a href="#" class="path-link path-link--current">Nike Air 50 Sneakers</a>
                </div>
            </div>

            <div class="product">
                <div class="container">
                    <div class="product-grid">
                        <div class="product-side">
                            <div class="product-img">
                                <img src={img} alt="Sneakers" />
                            </div>
                        </div>
                        <div class="product-side product-info">
                            <h1 class="title title--medium product-title">Nike Air 50 Sneakers</h1>
                            <div class="body-text product-descr">Explore our catalog and find your best fit. Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</div>
                            <div class="product-wrap">
                                <div class="product-price">76.00$</div>
                                <div class="product-color">
                                    Color: 
                                    <div class="product-swatch" data-color="blue" aria-label="blue">
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" stroke-opacity="0.1" class="outline"/>
                                            <circle cx="22.5" cy="22.5" r="15.5" fill="blue" class="swatch"/>
                                        </svg>                        
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="btn product-btn btn--primary">
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
import './Showcase.scss';
import img from './product-1.jpg';

const Showcase = () => {
    return (
        <section class="showcase spacer-100">
            <div class="container">
                <h2 class="title title--medium"><span>Latest</span> arrival</h2>
                <div class="showcase-grid">
                    <a href="#" class="card">
                        <div class="card-img">
                            <img src={img} alt="product" />
                        </div>
                        <h3 class="card-title">Nike Air 50 Sneakers</h3>
                        <div class="card-price">
                            <strong>58.00$</strong>
                        </div>
                    </a>
                    <a href="#" class="card">
                        <div class="card-img">
                            <img src={img} alt="product" />
                        </div>
                        <h3 class="card-title">Nike Air 50 Sneakers</h3>
                        <div class="card-price">
                            <strong>67.00$</strong>
                        </div>
                    </a>
                    <a href="#" class="card">
                        <div class="card-img">
                            <img src={img} alt="product" />
                        </div>
                        <h3 class="card-title">Nike Air 50 Sneakers</h3>
                        <div class="card-price">
                            <strong>90.00$</strong>
                        </div>
                    </a>
                    <a href="#" class="card">
                        <div class="card-img">
                            <img src={img} alt="product" />
                        </div>
                        <h3 class="card-title">Nike Air 50 Sneakers</h3>
                        <div class="card-price">
                            <strong>49.00$</strong>
                        </div>
                    </a>
                </div>
                <a href="#" class="arrow-link showcase-link">See more in catalog</a>
            </div>
        </section>
    )
}

export default Showcase;
import './Showcase.scss';
import img from './product-1.jpg';

const Showcase = () => {
    return (
        <section className="showcase spacer-100">
            <div className="container">
                <h2 className="title title--medium"><span>Latest</span> arrival</h2>
                <div className="showcase-grid">
                    <a href="#" className="card">
                        <div className="card-img">
                            <img src={img} alt="product" />
                        </div>
                        <h3 className="card-title">Nike Air 50 Sneakers</h3>
                        <div className="card-price">
                            <strong>58.00$</strong>
                        </div>
                    </a>
                    <a href="#" className="card">
                        <div className="card-img">
                            <img src={img} alt="product" />
                        </div>
                        <h3 className="card-title">Nike Air 50 Sneakers</h3>
                        <div className="card-price">
                            <strong>67.00$</strong>
                        </div>
                    </a>
                    <a href="#" className="card">
                        <div className="card-img">
                            <img src={img} alt="product" />
                        </div>
                        <h3 className="card-title">Nike Air 50 Sneakers</h3>
                        <div className="card-price">
                            <strong>90.00$</strong>
                        </div>
                    </a>
                    <a href="#" className="card">
                        <div className="card-img">
                            <img src={img} alt="product" />
                        </div>
                        <h3 className="card-title">Nike Air 50 Sneakers</h3>
                        <div className="card-price">
                            <strong>49.00$</strong>
                        </div>
                    </a>
                </div>
                <a href="#" className="arrow-link showcase-link">See more in catalog</a>
            </div>
        </section>
    )
}

export default Showcase;
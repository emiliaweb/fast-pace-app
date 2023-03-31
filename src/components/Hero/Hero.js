import { Link } from 'react-router-dom';

import './Hero.scss'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1 className="title title--big hero-title">Jump into your <span>new sneakers</span></h1>
                <div className="body-text hero-text">Find your shoes from our various collections.</div>
                <div className="hero-btns">
                    <Link to={'/catalog'} className="btn btn--primary">Explore shoes</Link>
                    <a href="#about" className="btn btn--outline">Learn more</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
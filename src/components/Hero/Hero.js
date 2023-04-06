import { Link } from 'react-router-dom';

import './Hero.scss'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <h1 className="title title--big hero-title">Переобуйтесь в <span>новые кроссовки</span></h1>
                <div className="body-text hero-text">Найдите свою пару обуви из наших различных коллекций.</div>
                <div className="hero-btns">
                    <Link to={'/catalog'} className="btn btn--primary">Найти обувь</Link>
                    <a href="#about" className="btn btn--outline">Узнать больше</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
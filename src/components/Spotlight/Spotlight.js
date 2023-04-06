import { Link } from 'react-router-dom';

import './Spotlight.scss';
import img from './about-img.png';
import arrow from './arrow-right-light.svg';

const Spotlight = ({sectionID, hideBtn}) => {
    const btn = hideBtn ? null : 
    <Link to='/catalog' className="btn spotlight-btn btn--primary">
        Купить сейчас
        <img src={arrow} alt="Arrow pointing to the right" />
    </Link>;
    return (
        <section className="spotlight spacer-100" id={sectionID ?? 'spotlight'}>
            <div className="container">
                <div className="spotlight-wrap">
                    <div className="spotlight-side">
                        <h2 className="title title--medium spotlight-title">Здесь вы найдете обувь <span>высокого качества</span></h2>
                        <div className="body-text spotlight-text">
                            <p>Добро пожаловать в наш магазин обуви! Мы рады предложить вам широкий ассортимент качественной обуви от лучших производителей.</p>
                            <p>Мы уверены, что каждый из наших клиентов найдет идеальную пару обуви, которая подойдет именно ему.</p>
                        </div>
                        {btn}
                    </div>
                    <div className="spotlight-side">
                        <div className="spotlight-img">
                            <img src={img} alt="A white shoe on top of a rock" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spotlight;
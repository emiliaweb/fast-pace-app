import { Link } from 'react-router-dom';

import './Spotlight.scss';
import img from './about-img.png';
import arrow from './arrow-right-light.svg';

const Spotlight = ({sectionID}) => {
    return (
        <section className="spotlight spacer-100" id={sectionID ?? 'spotlight'}>
            <div className="container">
                <div className="spotlight-wrap">
                    <div className="spotlight-side">
                        <h2 className="title title--medium spotlight-title">Here you will find <br /> <span>exceptional quality</span> shoes</h2>
                        <div className="body-text spotlight-text">
                            <p>Text that will convince users to buy sneakers from this store. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                            <p>Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                        </div>
                        <Link to='/catalog' className="btn spotlight-btn btn--primary">
                            Shop now
                            <img src={arrow} alt="Arrow pointing to the right" />
                        </Link>
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
import './Spotlight.scss';
import img from './about-img.png';
import arrow from './arrow-right-light.svg';

const Spotlight = () => {
    return (
        <section class="spotlight spacer-100">
            <div class="container">
                <div class="spotlight-wrap">
                    <div class="spotlight-side">
                        <h2 class="title title--medium spotlight-title">Here you will find <br /> <span>exceptional quality</span> shoes</h2>
                        <div class="body-text spotlight-text">
                            <p>Text that will convince users to buy sneakers from this store. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                            <p>Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                        </div>
                        <a href="#" class="btn spotlight-btn btn--primary">
                            Shop now
                            <img src={arrow} alt="Arrow pointing to the right" />
                        </a>
                    </div>
                    <div class="spotlight-side">
                        <div class="spotlight-img">
                            <img src={img} alt="A white shoe on top of a rock" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spotlight;
import './Hero.scss'

const Hero = () => {
    return (
        <section class="hero">
            <div class="container">
                <h1 class="title title--big hero-title">Jump into your <span>new sneakers</span></h1>
                <div class="body-text hero-text">Find your shoes from our various collections.</div>
                <div class="hero-btns">
                    <a href="#" class="btn btn--primary">Explore shoes</a>
                    <a href="#" class="btn btn--outline">Learn more</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
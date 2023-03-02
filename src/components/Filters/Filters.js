import './Filters.scss';

import filterIcon from './filter.svg';
import colorIcon from './color-choice.svg';

const Filters = () => {
    return (
        <div className="filters">
            <div className="container filters-wrap">
                <div className="filters-price">
                    <div className="filters-icon">
                        <img src={filterIcon} alt="Filter icon" />
                    </div>
                    <div className="filters-price-wrap">
                        <a href="#" className="filters-price-item active">Below 50$</a>
                        <a href="#" className="filters-price-item">Above 50$</a>
                    </div>
                </div>
                <div className="filters-colors">
                    <div className="filters-icon">
                        <img src={colorIcon} alt="Color-choice icon" />
                    </div>
                    <div className="filters-colors-wrap">
                        <a href="#" className="filters-colors-item active" data-color="black" aria-label="black">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="black" className="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" className="filters-colors-item" data-color="white" aria-label="white">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="white" className="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" className="filters-colors-item" data-color="red" aria-label="red">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="red" className="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" className="filters-colors-item" data-color="orange" aria-label="orange">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="orange" className="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" className="filters-colors-item" data-color="yellow" aria-label="yellow">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="yellow" className="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" className="filters-colors-item" data-color="blue" aria-label="blue">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="blue" className="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" className="filters-colors-item" data-color="pink" aria-label="pink">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="pink" className="swatch"/>
                            </svg>                        
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;
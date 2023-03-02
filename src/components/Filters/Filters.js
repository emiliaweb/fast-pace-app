import './Filters.scss';

import filterIcon from './filter.svg';
import colorIcon from './color-choice.svg';

const Filters = () => {
    return (
        <div class="filters">
            <div class="container filters-wrap">
                <div class="filters-price">
                    <div class="filters-icon">
                        <img src={filterIcon} alt="Filter icon" />
                    </div>
                    <div class="filters-price-wrap">
                        <a href="#" class="filters-price-item active">Below 50$</a>
                        <a href="#" class="filters-price-item">Above 50$</a>
                    </div>
                </div>
                <div class="filters-colors">
                    <div class="filters-icon">
                        <img src={colorIcon} alt="Color-choice icon" />
                    </div>
                    <div class="filters-colors-wrap">
                        <a href="#" class="filters-colors-item active" data-color="black" aria-label="black">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" stroke-opacity="0.1" class="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="black" class="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" class="filters-colors-item" data-color="white" aria-label="white">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" stroke-opacity="0.1" class="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="white" class="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" class="filters-colors-item" data-color="red" aria-label="red">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" stroke-opacity="0.1" class="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="red" class="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" class="filters-colors-item" data-color="orange" aria-label="orange">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" stroke-opacity="0.1" class="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="orange" class="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" class="filters-colors-item" data-color="yellow" aria-label="yellow">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" stroke-opacity="0.1" class="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="yellow" class="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" class="filters-colors-item" data-color="blue" aria-label="blue">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" stroke-opacity="0.1" class="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="blue" class="swatch"/>
                            </svg>                        
                        </a>
                        <a href="#" class="filters-colors-item" data-color="pink" aria-label="pink">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" stroke-opacity="0.1" class="outline"/>
                                <circle cx="22.5" cy="22.5" r="15.5" fill="pink" class="swatch"/>
                            </svg>                        
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;
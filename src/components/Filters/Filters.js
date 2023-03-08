import './Filters.scss';

import filterIcon from './filter.svg';
import colorIcon from './color-choice.svg';

const Filters = ({onSetFilter, color, price}) => {
    const onSelectFilter = (event) => {
        event.preventDefault();

        const filter = event.target.getAttribute('data-filter-value');
        const filterType = event.target.getAttribute('data-filter-type');
        // Only call onSetFilter if the selected filter is not already active
        if ((filterType === 'price' && filter !== price) || (filterType === 'color' && filter !== color)) {
            onSetFilter(filter, filterType);
        }
    }

    const priceFilterData = [
        { label: 'Below 50$', value: '<50' },
        { label: 'Above 50$', value: '>50' }
    ];

    const colorFilterData = [
        { value: 'black' },
        { value: 'white' },
        { value: 'red' },
        { value: 'orange' },
        { value: 'yellow' },
        { value: 'blue' },
        { value: 'pink' },
    ];

    const priceFilters = priceFilterData.map((item, i) => {
        const classes = price === item.value ? 'active' : null;
        return (
            <a 
                href="#" 
                className={`filters-price-item ${classes}` }
                data-filter-type="price" 
                data-filter-value={item.value} 
                onClick={onSelectFilter} 
                key={i}>{item.label}</a>
        )
    })

    const colorFilters = colorFilterData.map((item, i) => {
        const classes = color === item.value ? 'active' : null;
        return (
            <a 
                href="#" 
                className={`filters-colors-item ${classes}`} 
                data-filter-type="color" 
                data-filter-value={item.value} 
                onClick={onSelectFilter} 
                aria-label={item.value} 
                key={i}>
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22" stroke="#26273C" strokeOpacity="0.1" className="outline"/>
                    <circle cx="22.5" cy="22.5" r="15.5" fill={item.value} className="swatch"/>
                </svg>                        
            </a>
        )
    });

    return (
        <div className="filters">
            <div className="container filters-wrap">
                <div className="filters-price">
                    <div className="filters-icon">
                        <img src={filterIcon} alt="Filter icon" />
                    </div>
                    <div className="filters-price-wrap">
                        {priceFilters}
                    </div>
                </div>
                <div className="filters-colors">
                    <div className="filters-icon">
                        <img src={colorIcon} alt="Color-choice icon" />
                    </div>
                    <div className="filters-colors-wrap">
                        {colorFilters}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;
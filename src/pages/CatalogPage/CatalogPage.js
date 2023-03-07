import { useEffect, useState } from "react";

import Filters from "../../components/Filters/Filters";
import Catalog from "../../components/Catalog/Catalog";
import useFPService from "../../services/FPService";
import Card from "../../components/Card/Card";

const CatalogPage = () => {
    const { getAllProducts } = useFPService();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');
    const [colorFilter, setColorFilter] = useState('');

    const getProducts = () => {
        setLoading(true);
        getAllProducts()
            .then(data => {
                setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                }, 1500)
            });
    }

    useEffect(() => {
        getProducts();
    }, [])

    const onSetFilter = (filter, filterType = '') => {
        switch(filterType) {
            case 'price': 
                setPriceFilter(filter);
                console.log('price', filter);
                break;
            case 'color':
                setColorFilter(filter);
                console.log('color', filter);
                break;
            default: 
                console.log('default');
                break;
        }
        
    }

    return (
        <>
            <div className="spacer-170">
                <div className="container">
                    <h1 className="title title--big">Find your <span>new sneakers</span></h1>
                    <div className="body-text">Explore our catalog and find your best fit.</div>
                </div>
            </div>
            <Filters onSetFilter={onSetFilter} price={priceFilter} color={colorFilter}/>
            <Catalog products={products} loading={loading} />
        </>
    )
}

export default CatalogPage;
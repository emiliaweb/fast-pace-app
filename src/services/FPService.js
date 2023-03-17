import { useState } from "react";

const useFPService = () => {
    const [error, setError] = useState(false);

    const _url = 'https://raw.githubusercontent.com/emiliaweb/shoes-db/main/shoes-db.json';

    const getAllProducts = async () => {
        const response = await fetch(_url);

        if(!response.ok) {
            setError(true);
            throw new Error(`Could not fetch ${_url}, status ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        return data.map(item => _transformProduct(item))
    }

    const getProduct = async (id) => {
        return await getAllProducts()
        .then(data => {
            return data.filter(item => item.id === id)[0];
        });
    }

    const _transformProduct = (item) => {
        const {title, description, imageURL, isAvailable, color, price} = item.product;
        return {
            id: item.id,
            title,
            description,
            imageURL,
            isAvailable,
            color,
            price
        }
    }

    const clearError = () => {
        setError(false);
    }

    return {
        getAllProducts,
        getProduct,
        clearError,
        error
    }
}

export default useFPService;
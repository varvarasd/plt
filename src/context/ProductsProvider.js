import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = process.env.REACT_APP_PRODUCTS;
        axios.get(url)
            .then((res) => {
                if (res && res.status === 200) {
                    res.data.forEach(item => item.quantity = 1);
                    res.data.forEach(item => item.total = item.quantity * item.price);
                    const prices = res.data.map(item => item.price);
                    res.data.total = prices.reduce((acc, curr) => acc + curr);
                    setProducts(res.data);
                }
            })
            .catch((err) => console.log(err, `=== GET CART PRODUCTS DATA ERROR ===`));
    }, []);

    return <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
}

const useProductsContext = () => useContext(ProductsContext);

export {
    ProductsProvider as default,
    useProductsContext
}
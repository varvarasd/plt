import React, { createContext, useState, useContext, useEffect } from 'react';
import { useProductsContext } from './ProductsProvider';

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const { products } = useProductsContext();
    const [state, setState] = useState(products);

    
    useEffect(() => {
        setState(products);
    }, [state, products, products.total]);

    const increase = payload => {
        const itemIndex = state.findIndex(item => item.id === payload.id);
        state[itemIndex].quantity++;
        state[itemIndex].total = state[itemIndex].quantity * state[itemIndex].price;
        const prices = state.map(item => item.isHidden ? null : item.total);
        state.total = prices.reduce((acc, curr) => acc + curr).toFixed(2);
        setState([...state]);
    }

    const decrease = payload => {
        const itemIndex = state.findIndex(item => item.id === payload.id);
        if(state[itemIndex].quantity === 1) return null;
        state[itemIndex].quantity--;
        state.total = (state.total - state[itemIndex].price).toFixed(2);
        setState([...state]);
    }

    const remove = payload => {
        const itemIndex = products.findIndex(item => item.id === payload.id);
        state.splice(itemIndex, 1);
        if(!state.length) return setState([...state]);
        const prices = state.map(item => item.isHidden ? null : item.total);
        state.total = prices.reduce((acc, curr) => acc + curr).toFixed(2);
        setState([...state]);
    }

    const filter = payload => {
        state.map(item => item.colour !== payload && payload !== 'All' ? item.isHidden = true : item.isHidden = false)
        const prices = state.map(item => item.isHidden ? null : item.total);
        state.total = prices.reduce((acc, curr) => acc + curr).toFixed(2);
        const newState = state.filter(item => item.isHidden === false);
        if(payload === 'all') {
            const prices = state.map(item => item.total);
            state.total = prices.reduce((acc, curr) => acc + curr).toFixed(2);
            setState([...state])
        } else {
            setState([...newState]);
        }
    }

    const contextValues = {
        state,
        increase,
        decrease,
        remove,
        filter
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}

const useCartContext = () => useContext(CartContext);

export { 
    CartProvider as default, 
    useCartContext 
};
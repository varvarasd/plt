import React from 'react';
import { shallow } from 'enzyme';
import CartProvider from '../../context/CartProvider';
import ProductsProvider from '../../context/ProductsProvider';
import Home from '.';

describe('Home', () => {
    it('renders without crashing', () => {
        shallow(
            <ProductsProvider>
                <CartProvider>
                    <Home />
                </CartProvider>
            </ProductsProvider>
            );
    });
});
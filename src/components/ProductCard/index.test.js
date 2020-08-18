import React from 'react';
import { shallow } from 'enzyme';
import CartProvider from '../../context/CartProvider';
import ProductsProvider from '../../context/ProductsProvider';
import ProductCard from '.';

describe('ProductCard', () => {
    it('renders without crashing', () => {

        shallow(
            <ProductsProvider>
                <CartProvider>
                    <ProductCard />
                </CartProvider>
            </ProductsProvider>
        );
    });
});
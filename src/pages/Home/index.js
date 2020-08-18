import React, { Fragment } from 'react';
import Layout from '../../components/Layout';
import { useCartContext } from '../../context/CartProvider';
import { coloursReducer } from '../../utils';
import ProductCard from '../../components/ProductCard';
import './home.scss';

const Home = () => {
    const { state, filter } = useCartContext();

    const colourOptions = coloursReducer(state);

    const content = <Fragment>
        <div >
            <select onChange={(e) => filter(e.target.value)} className="filter">
                <option>All</option>
                {colourOptions.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
        <ProductCard />
        <h3 className="total">Total: {state.total}</h3>
    </Fragment>

    return (
        <Layout 
            title='Shopping Cart' 
            description="Pretty Little Things Shopping Cart">
            <section className="container">
            {state.length ? content : <h1>Shopping cart is empty</h1>}
            </section>
        </Layout>
    );
}

export default Home;
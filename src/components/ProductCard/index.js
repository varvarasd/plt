import React from 'react';
import classNames from 'classnames';
import { useCartContext } from '../../context/CartProvider';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../icons';
import { Button } from '../Elements';
import './product-card.scss';

const ProductCard = () => {
    const { state, increase, decrease, remove } = useCartContext()
    
    const productCard = ({id, name, price, colour, img, quantity, isHidden}, index) => {
        const cardClasses = classNames('card', {
            hidden: isHidden
        });

        return <div key={name + index} className={cardClasses}>
            <div className="card__product">
                <img src={img} className="card__product-image" alt={name}/>
                <div className="card__product-text">
                    <h3>{id} {name}</h3>
                    <h4>Colour {colour}</h4>
                    <h4>Price £{price}</h4>
                </div>
            </div>
            <div className="card__control">
                <Button action={() => decrease(state[index])}>
                    <MinusCircleIcon width={"20px"}/>
                </Button>
                <div className="card__control-text">
                    <p>Qty {quantity}</p>
                    <p>Item Total {price * quantity}</p>
                </div>
                <Button action={() => increase(state[index])}>
                    <PlusCircleIcon width={"20px"}/>
                </Button>
                <Button action={() => remove(state[index])} classes='button__remove'>
                    <TrashIcon width={"15px"}/>
                </Button>
            </div>
        </div>
    };

    const productCardElement = state.map(productCard);
    
    return productCardElement
};

export default ProductCard;
import React from 'react';
import '../CSS/BasketItem.css';
import { useStateValue } from '../REQs/StateProvider';

function BasketItem({id, title, price, rating, image}) {
    // eslint-disable-next-line
    const [ { basket }, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      };
    
    return (
        <div className="basketItem">
            <img className="basketItem__image" src={image} alt="basketItem_image"/>
            <div className="basketItem__info">
                <p>{title}</p>
                <p className="basketItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="basketItem__rating">
                    { Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><span role="img" aria-label="">⭐</span></p>
                    ))}
                </div>
                <button className="basketItem__removeFromBasket" onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default BasketItem

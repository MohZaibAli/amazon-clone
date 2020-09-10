import React from 'react';
import '../CSS/Product.css';
import { useStateValue } from '../REQs/StateProvider';
import { useHistory } from 'react-router-dom';

function Product({id, title, price, rating, image}) {
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue();

    const addToBasket = () => {
        if (user) {
            dispatch({
              type: "ADD_TO_BASKET",
              item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
              },
            });
          } else {
            history.push("/login");
        }
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    { Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><span role="img" aria-label="">⭐</span></p>
                    ))}
                </div>
            </div>
            <img className="product__image" src={image} alt="product_image"/>
                <button className="product__addToBasket" onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product

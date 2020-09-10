import React from 'react';
import '../CSS/Checkout.css';
import SubTotal from './SubTotal';
import BasketItem from './BasketItem';
import { useStateValue } from '../REQs/StateProvider';
import { Link } from "react-router-dom";
import { AnimatedList } from "react-animated-list";

function Checkout() {
    const [{ basket , user }] = useStateValue();
    
    if (basket.length !== 0 ) {
    
        return (
            <div className="checkout">
                <div className="checkout__leftSide">
                    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout_ad" />
                    <div className="checkout__title">
                        <h2>
                            Your Shopping Basket
                        </h2>
                        <AnimatedList animation={"zoom"}>
                            { basket?.map((item) => (
                                <BasketItem
                                    key={item.title}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </AnimatedList>
                    </div> 
                </div>
                <div className="checkout__rightSide">
                    <SubTotal />
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="checkout">
                <div className="checkout__leftSide">
                    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout_ad" />
                    <h3>{user ? `Hey, ${user.displayName}! `: "Hey, Guest!"}</h3>
                    <div className="checkout__title">
                        <h2>
                            Your Shopping Basket is Currently Empty
                        </h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                        <Link to="/">
                        <button className="checkout__productRedirect">
                            Take a look
                        </button>
                        </Link></p>
                        
                    </div> 
                </div>
            </div>
        );
    }
}

export default Checkout

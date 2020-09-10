import React from 'react';
import '../CSS/Header.css'
import { Search, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../REQs/StateProvider';
 import { auth } from "../REQs/Firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
        auth.signOut();
        dispatch({
            type: "CLEAN_BASKET",
        });
        }
    };

    return (
        <div className="header" >
            <Link to="/">
            <img className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="logo" />
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <Search className="header__searchIcon" />
            </div>

            
            <div className="header__nav">
                <Link to={!user && "/login"}>
                <div className="header__option" onClick={handleAuthentication}>
                    <span className="header__optionSecondary">{user ? `Hey, ${user.displayName} `: "Hello Guest"}</span>
                    <span className="header__optionPrimary">{user ? "Sign Out" : "Sign In"}</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionSecondary">Returns</span>
                    <span className="header__optionPrimary">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionSecondary">Your</span>
                    <span className="header__optionPrimary">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    <span className="header__optionPrimary header__optionBasketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>

            
        </div>
    )
}

export default Header

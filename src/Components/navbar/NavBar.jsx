import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import './NavBar.css';

import CartPage from '../cart/CartPage';

function NavBar({cart}) {
    const [cartStatus, setCartStatus] = useState(false);
    const handleCart = () => {
        setCartStatus(!cartStatus);
    }
    const [cartCount, setCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => 
            count += item.count);
        setCount(count);

    }, [cart, cartCount])
    return (
        <div className="parent">
            <header>
                {cartStatus === true

                    ?<div className="cartInHeader">
                        <CartPage></CartPage>
                    </div>
                    :<></>
                }
                <div className="logoName">        
                    <span >BlablaCart</span>
                </div> 
                <nav className="headerContentRight">
                    <ul>
                        <li className="cart">
                            <span onClick={handleCart}>CART</span>
                            <span className="badge">{cartCount}</span>
                        </li>
                        <li>
                            <div className="avatarClass">
                                DP
                            </div>
                        </li>
                        <li className="logoName">Username</li>
                    </ul>
                </nav>
            </header>
            <br />
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
      cart: store.cart,
    };
  };
export default connect(mapStateToProps)(NavBar);

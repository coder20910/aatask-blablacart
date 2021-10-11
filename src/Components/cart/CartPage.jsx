import React from 'react';
import {connect} from "react-redux";
import CartItem from './CartItem';

function Cart(props) {
    let cart = props.cart;
    
    return (
        <>
            <div className="cartContent">
            {
                cart.length === 0? <div>Your Cart is empty</div>:
                cart.map((item)=>{
                    return (<CartItem key={item.id} item={item} />)
                })
            }
        </div>
        
        </>
    )
}
const mapStateToProps = (store)  => {
    return store;
}
export default connect(mapStateToProps)(Cart);

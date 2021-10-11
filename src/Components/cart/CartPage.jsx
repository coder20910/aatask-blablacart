import React,{useState, useEffect} from 'react';
import {connect} from "react-redux";
import CartItem from './CartItem';

function Cart(props) {
    let cart = props.cart;
    
    const [totalItem, setTotalItem] = useState(0);

    const [loading, setLoading] = useState(true);
    // 1
    useEffect(() => {
        setLoading(true);
        let count = 0;
        cart.forEach((item) => {
            count += item.count
        })
        setTotalItem(count);

    }, [cart])
    
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

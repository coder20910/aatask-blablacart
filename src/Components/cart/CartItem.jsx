import React, {useState} from 'react';
import {connect} from "react-redux";
import "./CartItem.css"

function CartItem({item, adjustItemQty, deleteFromCart}) {
    
    const [itemCount, setInput] = useState(item.count);
    
    const handleUpButton=  ()=>{
        adjustItemQty(item.id, itemCount+1);
        setInput(itemCount+1);
    }
    const handleDownButton = () =>{
        if(itemCount>1){
            setInput(itemCount -1)
            adjustItemQty(item.id, itemCount-1);
        }
    }
    return (
        <div className="cartItem" key={item.id}>
            <div className="productImageCart">
                <img src={item.image} alt={item.title} />
            </div>
            
            <div className="productTitleAndQuantity">
                <div>{item.title}</div>
                    <div className="quantity">
                    Quantity :
                    <div className="upDown">
                        <div class="arrow arrowUp" onClick={handleUpButton}></div>
                        <div>
                            <input className="inputNum" type="number"  min="1" value={itemCount}/>
                        </div>
                        <div class="arrow arrowDown" onClick={handleDownButton}></div>
                    </div>
                    </div>
            </div>
            <div className="removeProduct">
                <div className="removeProductButton">
                    <button onClick={()=> deleteFromCart(item.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return  {
        adjustItemQty: (id, count) => dispatch({type:"AdjustQty", payload:{id, count}}),
        deleteFromCart: (id) => dispatch({type:"DeleteItem", payload:{id}})
    }
}
export default connect(null, mapDispatchToProps)(CartItem);

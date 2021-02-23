import React from 'react';
import Order from '../Order/Order';

function Cart(){
    let cartname="chiru";
    let values=[10,20,30,40];
    let cartitems={
        cartitem: [],
        totalprice: 10000,
    };
    function addtocart(){
        console.log("This is a addtocart");
    }
    return(
        <React.Fragment>
    <Order name={cartname} dvalue={values} dobj={cartitems} method={addtocart} />
    </React.Fragment>);
}
export default Cart;
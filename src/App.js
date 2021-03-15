import React from 'react';
import Product from './Product';
import Cart from './Cart/Cart';
import Big from './Big/Big';
import Bs1 from './Bootstrap/Bs1';

function App(){
    return(
        <React.Fragment>
            <Bs1 />
        <h1>This is a app component</h1>
        <Product name={"chiru"} />
        <Cart />
        <Big />
        </React.Fragment>
    );
}
export default App;
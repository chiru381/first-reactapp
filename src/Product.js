import React from 'react';

function Product(props){
    return<>
         <h1>This is a product component</h1>
         <h3>I am {props.name} </h3>
          </>
}
export default Product;
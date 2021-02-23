import React, { Component } from 'react';

class Order extends Component{
    render(){
        let { dvalue, dobj }=this.props;
        return(
            <React.Fragment>
                <h1>This is a order component</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <pre>{JSON.stringify(this.props.dvalue)}</pre>
            </React.Fragment>
        );
    }

}
export default Order;
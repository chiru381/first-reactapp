import React, { Component } from 'react';

class Bug extends Component {
    
    render() {
        return <>
        <h1>bugg</h1>
         <h2>{JSON.stringify(this.props.dname)}</h2>
               </>
    }
}

export default Bug;

import React, { Component } from 'react';
import Bug from '../Bug/Bug';

class Big extends Component {
    name="chiru";
    render() {
        return <>
        <h1>Bigg</h1>
        <Bug dname={this.name} />
               </>
    }
}

export default Big;

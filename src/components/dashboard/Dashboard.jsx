import React, { Component } from 'react';
import Product from '../product/Product';


class Dashboard extends Component {
    constructor() {
        super();
        
    }
    
    render() {
        return (
            <div>
                Dashboard
                <Product />
            </div>
        );
    }
}

export default Dashboard;
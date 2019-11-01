import React, { Component } from 'react';
import Product from '../product/Product';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        
    }
    
    
    
    render() {
        const inventoryList = this.props.inventory.map((item) => {
            return(
                <>
            <Product
            price = {item.price}
            name = {item.name}
            img = {item.img}
            />
            <hr/>
            </>
            )
        })
        
        return (
            <div>
                <ul>
                {inventoryList}
                </ul>
            </div>
        );
    }
}

export default Dashboard;
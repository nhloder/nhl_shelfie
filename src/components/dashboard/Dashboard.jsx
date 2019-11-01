import React, { Component } from 'react';
import Product from '../product/Product';
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
    }
    
    deleteFn(id){
        console.log('hit', id)
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                inventory: res.data
            })
        })
    }
    
    render() {
        const inventoryList = this.props.inventory.map((item) => {
            return(
                <>
            <Product
            id = {item.id}
            price = {item.price}
            name = {item.name}
            img = {item.img}
            />
            <button onClick = {(id) => this.deleteFn(item.id)}>Delete</button>
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
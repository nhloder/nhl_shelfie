import React, { Component } from "react";
import Product from "../product/Product";
import axios from "axios";
import {Link} from 'react-router-dom'


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
        inventory: []
    }
}

  deleteFn(id) {
    axios.delete(`/api/inventory/${id}`)
    .then(res => {
      // console.log(res.data)
      this.setState({
        inventory: res.data
      });
    });
    window.location.reload()
  }

  componentDidMount(){
    axios
    .get('/api/inventory')
      .then(res => {
      // console.log('hit')
      this.setState({
        inventory: res.data
      })
    })
  }
  
  editFn = (id) => {
    this.props.history.push(`/edit/${id}`)
  }

  render() {
    const inventoryList = this.state.inventory.map(item => {
      return (
        <>
          <Product
            id={item.id}
            price={item.price}
            name={item.name}
            img={item.img}
            />
          <button onClick={() => this.deleteFn(item.id)}>Delete</button>
          <button onClick={() => this.editFn(item.id)}>Edit</button> 

          <hr />
        </>
      );
    });

    return (
      <div>
        <ul>{inventoryList}</ul>
        <Link to = '/add'><button>Add New Item</button></Link>
        
      </div>
    );
  }
}
export default Dashboard;

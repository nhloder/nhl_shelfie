import React, { Component } from "react";


class Product extends Component {
  

  render() {
    const {img, name, price} = this.props
    return <div>
        <img src={img} alt=" oops"/>
            <li> price: {price}</li>
            <li>name :{name}</li>
    </div>;
  }
}

export default Product;

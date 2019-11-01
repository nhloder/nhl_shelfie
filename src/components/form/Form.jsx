import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
constructor() {
    super();
    this.state = {
            name: " ",
            price: 0,
            img: " "
    };
}

    handleImg(e){
        this.setState({
            img: e.target.value
        })
    }

    handleName(e){
        this.setState({
            name: e.target.value
        })
    }

    handlePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    onCancel(){
        this.setState({
                name: " ",
                price: 0,
                img: " "
        })
    }
    addInventory(){
        axios.post('/api/inventory',this.state)
        // console.log('hit');
        this.onCancel();
        //^^^ this one works 
        // this.props.mount();
        // ^^^ this breaks the app
        window.location.reload()
    }


render() {
    return (
        <div>
            <div className="img">
                <img src= {this.state.img} alt="oops"/>
            </div>
        <div className="inputs">
            <span>Image URL:</span>
            <input type = 'text' value= {this.state.img} onChange = {(e) => this.handleImg(e)}></input>
            <span>Product Name:</span>
            <input type = 'text' value = {this.state.name} onChange = {(e) => this.handleName(e)}></input>
            <span>Price:</span>
            <input type = 'text' pattern = '[0-9]*' value = {this.state.price} onChange = {(e) => this.handlePrice(e)}></input>
        </div>
        <div className="buttons">
            <button onClick ={()=> this.onCancel()}>Cancel</button>
            <button onClick = {() => this.addInventory()}>Add To Inventory</button>
        </div>
        </div>
    );
}
}

export default Form;

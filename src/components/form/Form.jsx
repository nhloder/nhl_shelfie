import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      img: "",
      editToggle: false
    };
  }

  componentDidMount() {
    // console.log("hit", this.props.match.params);
    axios.get(`/api/inventory/${this.props.match.params.id}`).then(res => {
      this.setState({
        name: res.data.name,
        price: res.data.price,
        img: res.data.img,
        editToggle: true
      });
    });
  }

  editItem = () => {
    const {name, price, img} = this.state
    axios
      .put(`/api/inventory/${this.props.match.params.id}`, {name, price, img})
      .then(() => this.props.history.push("/"));
  };

  handleImg(e) {
    this.setState({
      img: e.target.value
    });
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onCancel() {
    this.setState({
      name: " ",
      price: 0,
      img: " "
    });
    this.props.history.push("/");
  }
  addInventory() {
    axios.post("/api/inventory", this.state).then(
      this.setState({
        name: " ",
        price: 0,
        img: " "
      })
    );
    this.props.history.push("/");
    window.location.reload();
  }

  whatsState() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="img">
          <img src={this.state.img} alt="oops" />
        </div>
        <div className="inputs">
          <span>Image URL:</span>
          <input
            type="text"
            value={this.state.img}
            onChange={e => this.handleImg(e)}
          ></input>
          <span>Product Name:</span>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.handleName(e)}
          ></input>
          <span>Price:</span>
          <input
            // type="text"
            pattern="[0-9]*"
            value={this.state.price}
            onChange={e => this.handlePrice(e)}
          ></input>
        </div>
        {this.whatsState()}
        <div className="buttons">
          <button onClick={() => this.onCancel()}>Cancel</button>
          {!this.state.editToggle ? (
            <button onClick={() => this.addInventory()}>
              Add To Inventory
            </button>
          ) : null}
          {this.state.editToggle ? (
            <button onClick={() => this.editItem()}>Confirm Edit</button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Form;

import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';
import { Component } from 'react';
import axios from 'axios'

export default class App extends Component{
  constructor() {
    super();
    this.state = {
        inventory: []
    }
}

componentDidMount(){
  axios
  .get('/api/inventory')
    .then(res => {
    console.log('hit')
    this.setState({
      inventory: res.data
    })
  })
}

render(){
  return (
    <div className="App">
      <Header />
      <Dashboard 
      inventory = {this.state.inventory}
      />
      <Form />

    </div>
  );
}
}


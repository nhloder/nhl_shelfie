import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import routes from './routes';



class App extends Component {    
    render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;



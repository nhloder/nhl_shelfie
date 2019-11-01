import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Form />

    </div>
  );
}

export default App;

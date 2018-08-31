import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Main/>
	  </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './img/background.jpg';
import Layout from './components/Layout';
import Home from './components/Home';
import NavBar from './components/NavBar';

var background = {
	width: "100%",
	height: "100%",
	backgroundImage: "url("+ Background +")",
	backgroundPosition: "top",
	backgroundAttachment: "fixed",
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <section style={background}>
<header></header>
<NavBar/>
		<Home/>
		<Layout/>
		</section>
	  </div>
    );
  }
}

export default App;

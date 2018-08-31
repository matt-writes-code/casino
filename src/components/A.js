import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../img/background.jpg';
import Layout from './Layout';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';
import Main from './Main';
import Home from './Home';
import NavSide from './NavSide';

var background = {
	width: "100%",
	height: "100%",
	backgroundImage: "url("+ Background +")",
	backgroundPosition: "top",
	backgroundAttachment: "fixed",
};

class A extends Component {
  render() {
    return (
      <div className="App">
        <section style={background}>
			<NavSide/>
			<NavBar/>
			<NavBar2/>
			<Home/>
			<Layout/>
		</section>
	  </div>
    );
  }
}

export default A;

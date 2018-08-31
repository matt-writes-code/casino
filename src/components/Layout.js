import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Fold1} from './Fold1';
import {Fold2} from './Fold2';
import {Fold3} from './Fold3';
import {Fold4} from './Fold4';
import {Fold5} from './Fold5';
import {Fold6} from './Fold6';
import Left from '../img/img-87274e.png';
import Mid from '../img/img-c49024.png';
import NavSide from './NavSide';

const white = {
  color:"white"
};

const row = {
	height:"100vh",
	backgroundColor:"none"
};

export default class Layout extends React.Component {
  render() {
    return (
      <div>
	  <Container>
		
		<Row md="12" style={row} id="Fold1">
			<Fold1/>
        </Row>
		
        <Row md="12" style={row} id="Fold2">
          <Fold2/>
        </Row>
	
		<Row style={row} id="Fold3"	>
          <Fold3/>
        </Row>
	
		<Row style={row} id="Fold4">
			<Fold4/>
        </Row>
	
		<Row style={row} id="Fold5">
			<Fold5/>
		</Row>
	
		<Row style={row} id="Fold6">
          <Fold6/>
        </Row>

      </Container>
	  <footer style={{ backgroundColor: "black" }}>
        <p style={{ color: "white" }}>ALL RIGHTS RESERVED. COPYRIGHT © 2018.<img src={Left} height="20%"/><img src={Mid} height="20%"/></p>
      </footer>
	  </div>
    );
  }
}

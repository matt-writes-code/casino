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
      <Container>
		<Row md="12" style={row}>
			<Fold1/>
        </Row>
		
        <Row md="12" style={row}>
          <Fold2/>
        </Row>
	
		<Row style={row}>
          <Fold3/>
        </Row>
	
		<Row style={row}>
			<Fold4/>
        </Row>
	
		<Row style={row}>
			<Fold5/>
		</Row>
	
		<Row style={row}>
          <Fold6/>
        </Row>

      </Container>
    );
  }
}

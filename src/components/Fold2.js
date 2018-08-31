import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import {Thumbnail} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import ModalA from './ModalA';
import ModalB from './ModalB';
import ModalC from './ModalC';
import ModalD from './ModalD';
import ModalE from './ModalE';
import ModalF from './ModalF';

const center = {
  justifyItems: "center",
  alignItems: "center",
  display: "inline-grid",
  padding: "1%",
  color:"#D4AF37",
  fontSize:"2em",
  marginTop:"5%"
};

const image = {
  backgroundColor:"none",
  maxWidth:'100%',
  maxHeight:'100%'
};

export class Fold2 extends React.Component {
  render() {
    return (
      <Container>
        <Row style={{ height: "50%"}}>
		  <Col xs="4" style={center}><ModalA/>锁大厅</Col>
          <Col xs="4" style={center}><ModalB/>优惠代码</Col>
          <Col xs="4" style={center}><ModalC/>积分系统</Col>
        </Row>
		<Row style={{ height: "50%"}}>
          <Col xs="4" style={center}><ModalD/>灵活更新</Col>
          <Col xs="4" style={center}><ModalE/>数据分析</Col>
		  <Col xs="4" style={center}><ModalF/>监控系统</Col>
        </Row>
      </Container>
    );
  }
}
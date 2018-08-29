import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import {Table} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import g from '../img/img-e255c6.png';
import h from '../img/img-8cfdfe.png';
import i from '../img/img-64cd11.png';
import j from '../img/img-0c7a35.png';

const center = {
  backgroundColor: "none",
  justifyItems: "center",
  alignItems: "center",
  display: "inline-grid",
};

const text = {
  color:"white"
};

const image = {
  backgroundColor:"none",
  maxWidth:'100%',
  maxHeight:'100%'
};

export class Fold3 extends React.Component {
  render() {
    return (
      <Container>
		<Row style={{ height: "100%"}}>
			<Col md="6" style={{ height: "100%" }}>
				<Row style={{ height: "50%"}}>
					<Col  style={center}><Image src={g} style={image} responsive/></Col>
					<Col  style={center}><Image src={h} style={image} responsive/></Col>
				</Row>
				<Row style={{ height: "50%" }}>
					<Col  style={center}><Image src={i} style={image} responsive/></Col>
					<Col  style={center}><Image src={j} style={image} responsive/></Col>
				</Row>
			</Col>
			<Col md="6">
				<text style={text}>
				温馨提示:当选择使用财务系统，在正式上线前需充值5万点数（即5万元）。当玩家充值进来，点数增加，当玩家提款出去，点数减少。并且，当点数低于一定阈值，我方会提醒您充值点数，低于最低点数，玩家将无法提款。
				</text>
				
	{/* Table */}

<Container>
	<Row>
	{/* <Col xs="8" style={{ paddingLeft: 0, paddingRight: 0 }}>
		 <Table bordered>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
				</tr>
		</Table> 
		</Col>
		<Col xs="4" style={{ paddingLeft: 0, paddingRight: 0 }}>
			<Table bordered>
				<tr>
					<td></td>
				</tr>
				<tr>
					<td></td>
				</tr>
			</Table>
		</Col> */}
	</Row>
</Container>
	  
			</Col>
		</Row>
      </Container>
    );
  }
}
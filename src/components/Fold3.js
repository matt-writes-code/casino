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
  marginTop:"12%"
};

const text = {
  color:"white",
  fontWeight:"bold"
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
			
			<Col md="1"></Col>			
			
			<Col md="5" style={center}>
				<text style={text}>
				温馨提示: <br/>当选择使用财务系统，在正式上线前需充值5万点数（即5万元）。当玩家充值进来，点数增加，当玩家提款出去，点数减少。并且，当点数低于一定阈值，我方会提醒您充值点数，低于最低点数，玩家将无法提款。
				</text>
				
	{/* Table */}
		 <Table style={{ color:"white" }} bordercolor="orange" border="1px solid orange" >
			<thead bgcolor="orange">
				<th>项目</th>
				<th>费率</th>
				<th>勾选</th>
			</thead>
			<tbody >
				<tr>
					<td >银行存款</td>
					<td>1.20%</td>
					<td rowspan="5"></td>
				</tr>
				<tr>
					<td>个人微信</td>
					<td>3.80%</td>
				</tr>
				<tr>
					<td>个人支付宝</td>
					<td>3.80%</td>
				</tr>
				<tr>
					<td>在线充值</td>
					<td>0.60%</td>
				</tr>
				<tr>
					<td>银行提款</td>
					<td>1%</td>
				</tr>
			</tbody>
		</Table>
			</Col>
		</Row>
      </Container>
    );
  }
}
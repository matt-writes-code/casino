import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import {Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import p from '../img/img-1550eb.png';
import q from '../img/img-6634cb.png';
import r from '../img/img-273171.png';

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

const bottom = {
  justifyItems: "center",
  alignItems: "top",
  display: "inline-grid",
  height:"10%"
};

const words = {
  color:"#D4AF37",
  fontSize:"2em"
};

export class Fold6 extends React.Component {
  render() {
    return (
      <Container>
		<Row style={{ height: "10%" }}>
		<text style={text}>温馨提示：您可自行购买域名，或由我方代购（付费）</text>
		</Row>
		<Row style={{ height: "70%" }}>
			<Col xs="4" style={center}><Image src={p} style={image} responsive/>
			<text style={text}>世界顶级机房</text>
			</Col>
			<Col xs="4" style={center}><Image src={q} style={image} responsive/>
			<text style={text}>自动防劫持技术</text>
			</Col>
			<Col xs="4" style={center}><Image src={r} style={image} responsive/>
			<text style={text}>超强防卫系统</text>
			</Col>
		</Row>
		<Row style={{ height:"10%"}}>
		<text style={text}>维护费：2万元/月</text>
		</Row>
		<Row style={bottom}>
		 <text style={words}>您已浏览完所有服务项目，但尚未选择游戏，请点击 <Button color="warning" href="#">选择游戏</Button></text>
		</Row>
      </Container>
    );
  }
}
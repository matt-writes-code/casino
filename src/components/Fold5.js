import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import k from '../img/20180807063222_icon_live800.png';
import l from '../img/20180807063246_icon_qunfa.png';
import m from '../img/20180807063308_icon_zanneixing.png';
import n from '../img/20180807063331_icon_zhudong.png';
import o from '../img/20180807063401_icon_huidian.png';

const center = {
	display: "block",
    marginLeft: "auto",
    marginRight: "auto",
	marginTop:"5%",
};

const text = {
  color:"white",
  fontSize:"1em",
  fontWeight:"bold"
};

const image = {
  backgroundColor:"none",
  maxWidth:'100%',
  maxHeight:'100%',
  padding:'1%'
};

export class Fold5 extends React.Component {
  render() {
    return (
      <Container>
		<Row style={{ height: "45%" }}>
			<Col xs="4" style={center}><Image src={k} style={image} responsive/>
			<p style={text}>客服系统</p>
			<p style={text}>1万元/账号</p>
			</Col>
			<Col xs="4" style={center}><Image src={l} style={image} responsive/>
			<p style={text}>短信群发</p>
			<p style={text}>验证码：0.11元/条 短信含敏感字：0.72元/条</p>
			</Col>
			<Col xs="4" style={center}><Image src={m} style={image} responsive/>
			<p style={text}>站内信</p>
			<p style={text}>免费</p>
			</Col>
		</Row>
		<Row style={{ height: "5%" }}>
			<Col xs="4" style={center}>
			</Col>
			<Col xs="4" style={center}>
			</Col>
			<Col xs="4" style={center}>
			</Col>
		</Row>
		<Row style={{ height: "50%" }}>
			<Col xs="2"></Col>
			<Col xs="4" style={center}><Image src={n} style={image} responsive/>
			<p style={text}>主动呼出</p>
			<p style={text}>维护费：7200元/月 通话计费：0.42元/分钟</p>
			</Col>
			<Col xs="4" style={center}><Image src={o} style={image} responsive/>
			<p style={text}>请求回电</p>
			<p style={text}>维护费：240元/月 通话计费:0.46元/分钟</p>
			</Col>
			<Col xs="2"></Col>
		</Row>
      </Container>
    );
  }
}
import React from "react";
import Background from '../img/p3.png';
import {Container, Row, Col, Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import penguin from '../img/img-24be61.png';
import skype from '../img/img-fe44c0.png';
import wechat from '../img/img-1a6a34.png';
import telegram from '../img/img-a3893e.png';
import Left from '../img/img-87274e.png';
import Mid from '../img/img-c49024.png';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

var background = {
	width: "100%",
	height: "100vh",
	backgroundImage: "url("+ Background +")",
	backgroundAttachment: "fixed",
	backgroundSize:"cover"
};

const text = {
	color:"white",
	float:"left",
	padding:"0%",
	fontSize:"1.5em"
}

const B = () => (
  <div>
    <section style={background}>
	<NavBar/>
	<NavBar2/>
	<Container>
		<Row>
			<Col>
			<h1 style={{ color:"white", float:"left", fontWeight:"bold"}}>让我为您提供优质的服务，<br/>绝对可以信赖，赶快联系我们</h1>
			</Col>
		</Row>
		<Row style={{float:"left"}}>
	<Table borderless style={text}>
		
		<tr>
			<td><img src={penguin}/></td>
			<td>3343848990</td>
		</tr>
		<tr>
			<td><img src={skype}/></td>
			<td>+639955184351</td>
		</tr>
		<tr>
			<td><img src={wechat}/></td>
			<td>jiaowolaoban888</td>
		</tr>
		<tr>
			<td><img src={telegram}/></td>
			<td>+639955184351</td>
		</tr>
	</Table>
	</Row>
		</Container>
	</section>
	<footer style={{ backgroundColor: "black" }}>
        <p style={{ color: "white" }}>ALL RIGHTS RESERVED. COPYRIGHT © 2018.<img src={Left} height="10%"/><img src={Mid} height="10%"/></p>
      </footer>
  </div>
);

export default B;

	import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Input } from 'reactstrap';
import {Image} from 'react-bootstrap';
import { Table } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import oneone from '../img/11.jpg';

const center = {
	display: "block",
    marginLeft: "auto",
    marginRight: "auto",
	marginTop:"5%",
	marginBottom:"auto",
};

const center1 = {
  backgroundColor: "none",
  justifyItems: "center",
  alignItems: "center",
  display: "inline-grid",
  flexDirection:"row"
};

const text = {
  color:"white",
  whiteSpace:"nowrap"
};

const image = {
  backgroundColor:"none",
  maxWidth:'100%',
  maxHeight:'100%'
};

export class Fold1 extends React.Component {
  render() {
    return (
      <Container>
	  
		<Row style={{ height: "auto" }}>
	
	{/* Top-Left */}
			<Col md="6" style={center}>
		<Table borderless>
        <tbody>
          <tr>
            <td><Input type="radio" name="radio1"/><text style={text}>简易清晰<br/>费用<br/>1万元</text></td>
			<td><Image src={oneone} style={image} responsive/></td>
            <td><Image src={oneone} style={image} responsive/></td>
            <td><Image src={oneone} style={image} responsive/></td>
          </tr>
        </tbody>
      </Table>
			</Col>
	
	{/* Top-Right */}
			<Col md="6" style={center}>
		<Table borderless>
        <tbody>
          <tr>
            <td><Input type="radio" name="radio1"/><text style={text}>简易清晰<br/>费用<br/>1万元</text></td>
			<td><Image src={oneone} style={image} responsive/></td>
            <td><Image src={oneone} style={image} responsive/></td>
            <td><Image src={oneone} style={image} responsive/></td>
          </tr>
        </tbody>
      </Table>
			</Col>
		</Row>
		<Row style={{ height: "50%" }}>
			
	{/* Bottom-Left */}
			<Col md="6" style={center}>
		<Table borderless>
        <tbody>
          <tr>
            <td><Input type="radio" name="radio1"/><text style={text}>简易清晰<br/>费用<br/>1万元</text></td>
			<td><Image src={oneone} style={image} responsive/></td>
            <td><Image src={oneone} style={image} responsive/></td>
            <td><Image src={oneone} style={image} responsive/></td>
          </tr>
        </tbody>
      </Table>
			</Col>
			
	{/* Bottom-Right */}
			<Col md="6" style={center}>
		<Table borderless>
        <tbody>
          <tr>
            <td><Input type="radio" name="radio1"/><text style={text}>简易清晰<br/>费用<br/>1万元</text></td>
			<td><Image src={oneone} style={image} responsive/></td>
            <td><Image src={oneone} style={image} responsive/></td>
            <td><Image src={oneone} style={image} responsive/></td>
          </tr>
        </tbody>
      </Table>
			</Col>
		</Row>
      </Container>
    );
  }
}
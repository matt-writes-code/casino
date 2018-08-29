import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/img-b2cedd.png";
import imageC1 from '../img/img-83cffc.jpg';
import imageC2 from '../img/img-ac2933.jpg';

const image = {
	display:'block',
	margin:"auto"
};

const headfoot = {
	color:"white",
	backgroundColor:"black",
};

export default class ModalC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <img src={icon} onClick={this.toggle} />
        <Modal size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader style={headfoot} toggle={this.toggle}>积分系统</ModalHeader>
          <ModalBody style={{backgroundColor:"#404040"}}>
			<Row>
				<Col xs="6"><img src={imageC1} style={image}/></Col>
				<Col xs="6"><img src={imageC2} style={image}/></Col>
			</Row>
          </ModalBody>
          <ModalFooter style={headfoot}>让玩家每次登陆，游戏，存款都有利可图，累计兑换真钱，在网站流连忘返。</ModalFooter>
        </Modal>
      </div>
    );
  }
}

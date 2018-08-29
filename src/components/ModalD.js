import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/img-c4f235.png";
import imageD1 from '../img/img-8875be.jpg';
import imageD2 from '../img/img-3b0ddf.jpg';

const image = {
	display:'block',
	margin:"auto"
};

const headfoot = {
	color:"white",
	backgroundColor:"black",
};

export default class ModalD extends React.Component {
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
        <Modal style={{maxWidth:"80%"}}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader style={headfoot} toggle={this.toggle}>积分系统</ModalHeader>
          <ModalBody style={{backgroundColor:"#404040"}}>
			<Row>
				<Col xs="6"><img src={imageD1} style={image}/></Col>
				<Col xs="6"><img src={imageD2} style={image}/></Col>
			</Row>
          </ModalBody>
          <ModalFooter style={headfoot}>让玩家每次登陆，游戏，存款都有利可图，累计兑换真钱，在网站流连忘返。</ModalFooter>
        </Modal>
      </div>
    );
  }
}

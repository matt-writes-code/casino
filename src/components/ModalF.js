import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/img-1f9b7c.png";
import imageF from '../img/img-b01a84.jpg';

const image = {
	display:'block',
	margin:"auto"
};

const headfoot = {
	color:"white",
	backgroundColor:"black",
};

export default class ModalF extends React.Component {
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
          <ModalHeader style={headfoot} toggle={this.toggle}>监控系统</ModalHeader>
          <ModalBody style={{backgroundColor:"#404040"}}>
<img src={imageF} style={image}/>
          </ModalBody>
          <ModalFooter style={headfoot}>实时监控，让玩家充值和风险控制，尽在掌握之中</ModalFooter>
        </Modal>
      </div>
    );
  }
}

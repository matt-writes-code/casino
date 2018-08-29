import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import icon from "../img/img-e95c1d.png";
import imageA from '../img/img-99a08f.jpg';

const image = {
	display:'block',
	margin:"auto"
};

const headfoot = {
	color:"white",
	backgroundColor:"black",
};

export default class ModalExample extends React.Component {
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
          <ModalHeader style={headfoot} toggle={this.toggle}>锁大厅</ModalHeader>
          <ModalBody style={{backgroundColor:"#404040"}}>
<img src={imageA} style={image}/>
          </ModalBody>
          <ModalFooter style={headfoot}>让玩家领取优惠后只能在指定游戏大厅游戏，达到相应要求后才能提款</ModalFooter>
        </Modal>
      </div>
    );
  }
}

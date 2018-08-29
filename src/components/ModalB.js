import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/img-eb90bc.png";
import imageB1 from '../img/img-aff3bd.jpg';
import imageB2 from '../img/img-700f60.jpg';

const image = {
	display:'block',
	margin:"auto"
};

const headfoot = {
	color:"white",
	backgroundColor:"black",
};

export default class ModalB extends React.Component {
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
          <ModalHeader style={headfoot} toggle={this.toggle}>优惠代码</ModalHeader>
          <ModalBody style={{backgroundColor:"#404040"}}>
			<Row>
				<Col xs="6"><img src={imageB1} style={image}/></Col>
				<Col xs="6"><img src={imageB2} style={image}/></Col>
			</Row>
          </ModalBody>
          <ModalFooter style={headfoot}>通过短信和站内信向玩家发送优惠代码，玩家只需满足条件输入代码即可自动领取优惠。</ModalFooter>
        </Modal>
      </div>
    );
  }
}

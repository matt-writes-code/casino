import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/img-71a3b8.png";
import ModalEcar from './ModalEcar';

const image = {
	display:'block',
	margin:"auto"
};

const headfoot = {
	color:"white",
	backgroundColor:"black",
};

export default class ModalE extends React.Component {
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
          <ModalHeader style={headfoot} toggle={this.toggle}>数据分析</ModalHeader>
          <ModalBody style={{backgroundColor:"#404040"}}>
<ModalEcar/>
          </ModalBody>
          <ModalFooter style={headfoot}>市场统计：自主分类推广方式和网址，每一个开户有迹可循，让每一个推广渠道得到检验。</ModalFooter>
        </Modal>
      </div>
    );
  }
}

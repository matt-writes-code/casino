import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, InputGroupText, InputGroupAddon, Input, Row, Col, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const center = {
  justifyItems: "center",
  alignItems: "center",
  display: "inline-grid",
  padding: "1%",
};

const image = {
	display:'block',
	margin:"auto"
};

const head = {
	color:"white",
	backgroundColor:"orange",
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
        <Button color="light" onClick={this.toggle} >发送</Button>
        <Modal size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader style={head} >请填写您的个人资料：</ModalHeader>
          <ModalBody style={{backgroundColor:"black"}}>
			  {/* Name */}
			<InputGroup>
				<InputGroupAddon addonType="prepend">
				<InputGroupText style={{width:"150px"}}>名称</InputGroupText>
				</InputGroupAddon>
				<Input />
			</InputGroup>
          </ModalBody>
		  
		  <ModalHeader style={head} >以下请填写至少一个选择：</ModalHeader>
          <ModalBody style={{backgroundColor:"black"}}>
				{/* 手机号码 */}
			<InputGroup>
				<InputGroupAddon addonType="prepend">
				<InputGroupText style={{width:"150px"}}>手机号码</InputGroupText>
				</InputGroupAddon>
				<Input />
			</InputGroup><br/>
				{/* WeChat */}
			<InputGroup>
				<InputGroupAddon addonType="prepend">
				<InputGroupText style={{width:"150px"}}>WeChat</InputGroupText>
				</InputGroupAddon>
				<Input />
			</InputGroup><br/>
				{/* qq */}
			<InputGroup>
				<InputGroupAddon addonType="prepend">
				<InputGroupText style={{width:"150px"}}>qq</InputGroupText>
				</InputGroupAddon>
				<Input />
			</InputGroup><br/>
				{/* Skype */}
			<InputGroup>
				<InputGroupAddon addonType="prepend">
				<InputGroupText style={{width:"150px"}}>Skype</InputGroupText>
				</InputGroupAddon>
				<Input />
			</InputGroup><br/>
				{/* Telegram */}
			<InputGroup>
				<InputGroupAddon addonType="prepend">
				<InputGroupText style={{width:"150px"}}>Telegram</InputGroupText>
				</InputGroupAddon>
				<Input />
			</InputGroup><br/>
			
					<Container>
			<Row>
				<Col style={center}><Button color="light" href="#">先看看</Button></Col>
				<Col style={center}><Button color="light" disabled>发送</Button>Remove</Col>
			</Row>
		</Container>
		  </ModalBody>
        </Modal>
      </div>
    );
  }
}

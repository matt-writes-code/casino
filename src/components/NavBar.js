import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Left from '../img/img-87274e.png';
import Mid from '../img/img-c49024.png';
import Right from '../img/img-2c4710.gif';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor:"black", overflow:"hidden"}} expand="md">
          <NavbarBrand href="/"><img src={Left} height="80px" /></NavbarBrand>
		  <NavbarBrand href="/"><img src={Mid} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color:"white"}}>首页</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{color:"white"}}>
                  联系我们
                </NavLink>
              </NavItem>
            </Nav>
			<NavbarBrand href="/"><img src={Right} /></NavbarBrand>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

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
import { Link } from "react-router-dom";

export default class NavBar2 extends React.Component {
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
		<Navbar style={{ backgroundColor:"black", overflow:"hidden", width:"100%", height:"70px"}} expand="md">
          <NavbarBrand href="/"><Link to="/"><img src={Left} height="80px" /></Link></NavbarBrand>
		  <NavbarBrand ><img src={Mid} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
				<Link to="/" style={{color:"white"}}>
				首页
				</Link>
				</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
				<Link to="/B" style={{color:"white"}}>
				联系我们
				</Link>
                </NavLink>
              </NavItem>
            </Nav>
			<NavbarBrand >
			<Link to="/C">
			<img src={Right} />
			</Link>
			</NavbarBrand>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

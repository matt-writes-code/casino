import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const side = {
	backgroundColor:"none",
	overflow:"hidden",
	position:"fixed",
	zIndex:"1",
	width:"10%",
	marginTop:"15%"
}

const navlink = {
	color:"white",
	fontWeight:"bold"
}

export default class NavSide extends React.Component {
  render() {
    return (
      <div>
		<Nav vertical style={side}>
		<NavLink style={{color:"white", fontSize:"1.5em", fontWeight:"bold"}}>服务项目</NavLink>
          <NavLink href="#Fold1" style={navlink}>网站制作</NavLink> 
		  <NavLink href="#Fold2" style={navlink}>后台功能</NavLink> 
		  <NavLink href="#Fold3" style={navlink}>财务系统</NavLink>
		  <NavLink href="#Fold4" style={navlink}>游戏提供</NavLink>
		  <NavLink href="#Fold5" style={navlink}>客服工具</NavLink>
		  <NavLink href="#Fold6" style={navlink}>运维服务</NavLink>
        </Nav>
      </div>
    );
  }
}
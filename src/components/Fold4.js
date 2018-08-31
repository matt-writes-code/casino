import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button, Table } from 'reactstrap';
import {Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import mess from '../img/20180819025447_AG.jpg';
import l from '../img/20180807063246_icon_qunfa.png';

const text = {
  color:"white",
  float:"left"
};

const image = {
  backgroundColor:"none",
  maxWidth:'100%',
  maxHeight:'100%'
};

const vline = {
	borderRight:"1px solid white"
}

export class Fold4 extends React.Component {
  render() {
    return (
      <Container>
		<Row style={{ height: "20%" }}>
		</Row>
		<Row style={{ height: "80%" }}>
			<Col md="5">
				<h3 style={text}>AG真人</h3><br/><br/>
				<text style={text}>支持版本：</text><br/>
				<text style={text}>H5, Flash，Desktop, Android-App</text><br/><br/>
				<text style={text}>平台特点：</text><br/>
				<text style={text}>1.游戏稳定，服务专业周到，使用人数最多。</text><br/>
				<text style={text}>2.游戏种类丰富，配男女荷官。</text><br/>
				<text style={text}>3.分类为国际厅，旗舰厅，多台，包桌和特色竞 </text><br/>
				<text style={text}>咪厅，以及真人直播。</text><br/>
				<text style={text}>4.举办活动频率高，AG赌神赛。</text><br/><br/>
				
				<text style={{color:"yellow", float:"left"}}>费率</text><br/><br/>
				
				<Table borderless size="sm" bordercolor="white" style={{ color:"white", maxWidth:"80%", fontSize:"0.8em" }}>
					<tr>
						<td style={vline}>$0&lt;X=&lt;200万</td>
						<td style={vline}>$200万&lt;X=&lt;500万</td>
						<td >X&gt;500万</td>
					</tr>
					<tr>
						<td style={vline}>10.0%</td>
						<td style={vline}>9.0%</td>
						<td >8.0%</td>
					</tr>
				</Table>
			</Col>
			<Col md="7">
				<Image src={mess} style={image} responsive/>
			</Col>
		</Row>
      </Container>
    );
  }
}
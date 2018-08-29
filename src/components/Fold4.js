import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import mess from '../img/20180819025447_AG.jpg';
import l from '../img/20180807063246_icon_qunfa.png';

const text = {
  color:"white",
};

const image = {
  backgroundColor:"none",
  maxWidth:'100%',
  maxHeight:'100%'
};

export class Fold4 extends React.Component {
  render() {
    return (
      <Container>
		<Row style={{ height: "20%" }}>
		</Row>
		<Row style={{ height: "80%" }}>
			<Col md="5">
				<text style={text}>
					AG真人<br/>
					支持版本：<br/>
					H5, Flash，Desktop, Android-App<br/><br/>
					
					平台特点：<br/>
					1.游戏稳定，服务专业周到，使用人数最多。<br/>
					2.游戏种类丰富，配男女荷官。<br/>
					3.分类为国际厅，旗舰厅，多台，包桌和特色竞<br/>
					咪厅，以及真人直播。<br/>
					4.举办活动频率高，AG赌神赛。<br/>
				</text>
			</Col>
			<Col md="7">
				<Image src={mess} style={image} responsive/>
			</Col>
		</Row>
      </Container>
    );
  }
}
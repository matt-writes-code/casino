import React from "react";
import {Container, Row, Col, Table, Button} from 'reactstrap';
import LastModal from './LastModal';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

const white = {
	color:"white"
}

const C = () => (
  <div>
	<NavBar/><NavBar2/>
	<br/>
	<Container>
		<Row>
			<Col md="6">
			
			{/* Left Table */}	
				<Table size="sm" bordercolor="orange" border="1px solid orange">
        <thead bgcolor="orange">
          <tr>
            <th>项目</th>
            <th>详细内容</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>运维服务</td>
            <td>维护费</td>
            <td>2万/月，月预付</td>
          </tr>
          <tr>
            <td>网站制作</td>
            <td>多元区块</td>
            <td>2万元</td>
          </tr>
          <tr>
            <td rowspan="5">客服工具</td>
            <td>客服系统</td>
            <td>1万元/账号</td>
          </tr>
		  <tr>
			<td>短信群发</td>
			<td>验证码：0.11元/条<br/>短信含敏感字：0.72元/条</td>
		  </tr>
		  <tr>
			<td>站内信</td>
			<td>免费</td>
		  </tr>
		  <tr>
			<td>主动呼出</td>
			<td>维护费：7200元/月<br/>通话计费：0.42元/分钟</td>
		  </tr>
		  <tr>
			<td>请求回电</td>
			<td>维护费：240元/月<br/>通话计费:0.46元/分钟</td>
		  </tr>
		  <tr>
            <td rowspan="5">财务系统</td>
            <td>银行存款</td>
            <td>1.20%</td>
          </tr>
		  <tr>
			<td>个人微信</td>
			<td>3.80%</td>
		  </tr>
		  <tr>
			<td>个人支付宝</td>
			<td>3.80%</td>
		  </tr>
		  <tr>
			<td>在线充值</td>
			<td>0.60%</td>
		  </tr>
		  <tr>
			<td>银行提款</td>
			<td>1%</td>
		  </tr>
		  <tr>
            <td rowspan="6">后台功能</td>
            <td>锁大厅</td>
            <td>免费</td>
          </tr>
		  <tr>
			<td>优惠代码</td>
			<td>免费</td>
		  </tr>
		  <tr>
			<td>积分系统</td>
			<td>免费</td>
		  </tr>
		  <tr>
			<td>灵活更新</td>
			<td>免费</td>
		  </tr>
		  <tr>
			<td>数据分析</td>
			<td>免费</td>
		  </tr>
		  <tr>
			<td>监控系统</td>
			<td>免费</td>
		  </tr>
        </tbody>
      </Table>
			</Col>
			<Col md="6">
			
	{/* Right Table */}
		<Table size="sm" bordercolor="orange" border="1px solid orange">
			<thead bgcolor="orange">
        <tr>
            <th colspan="2" rowspan="2">项目</th>
            <th colspan="2" rowspan="2">详细内容</th>
            <th colspan="3">价格</th>
        </tr>
        <tr>
            <th>$0&lt;X=&lt;200万</th>
            <th>$200万&lt;X=&lt;500万</th>
            <th>X&gt;500万</th>
        </tr>
			</thead>
			<tbody>
			<tr>
				<td colspan="7">亲，你还没选择任何游戏</td>
			</tr>
			</tbody>
		</Table>
			</Col>
		</Row>
		
		{/* Beginning of Bottom Table */}
		<Row>
			<Col xs="3">
				
			{/* Bottom-Left Table*/}
				<Table size="sm" borderless borderColor="orange">
					<thead	bgcolor="orange">
					<th colspan="2" style={white} >STEP1 签订合同</th>
					</thead>
					<tr>
						<td>运维服务</td>
						<td>2万/月，月预付</td>
					</tr>
					<tr>
						<td>网站制作</td>
						<td>2万元</td>
					</tr>
					<tr>
						<td>客服工具</td>
						<td>1万元/账号</td>
					</tr>
					<tr>
						<td colspan="2">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="2" >&nbsp;</td>
					</tr>
					<tr >
						<td colspan="2" height="45px" bgcolor="orange" style={white}>Step1 总计:5万元</td>
					</tr>
				</Table>
			</Col>
			<Col xs="1"></Col>
			<Col xs="3">
			{/* Bottom-Mid Table*/}
				<Table size="sm" borderless borderColor="orange">
					<thead	bgcolor="orange">
					<th colspan="2" style={white}>STEP2 正式上线</th>
					</thead>
					<tr>
						<td>银行存款</td>
						<td>1.20%</td>
					</tr>
					<tr>
						<td>个人微信</td>
						<td>3.80%</td>
					</tr>
					<tr>
						<td>个人支付宝</td>
						<td>3.80%</td>
					</tr>
					<tr>
						<td>在线充值</td>
						<td>0.60%</td>
					</tr>
					<tr >
						<td>银行提款</td>
						<td>1%</td>
					</tr>
					<tr >
						<td height="45px" colspan="2" bgcolor="orange" style={white}>Step2 总计:5万元</td>
					</tr>
				</Table>
			</Col>
			<Col xs="1"></Col>
			<Col xs="3">
			{/* Bottom-Right Table*/}
				<Table size="sm" borderless borderColor="orange">
					<thead	bgcolor="orange">
					<th colspan="2" style={white}>STEP3 营业上轨</th>
					</thead>
					<tr>
						<td colspan="2">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="2">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="2">其他各项费用月末结算</td>
					</tr>
					<tr>
						<td colspan="2">&nbsp;</td>
					</tr>
					<tr>
						<td colspan="2">&nbsp;</td>
					</tr>
					<tr >
						<td bgcolor="orange"><Button color="light" href="#">先看看</Button></td>
						<td bgcolor="orange"><LastModal/></td>
					</tr>
				</Table></Col>
		</Row>
	</Container>
  </div>
);

export default C;

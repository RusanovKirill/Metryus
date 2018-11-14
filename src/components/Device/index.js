import React, { Component } from 'react';
import LogicContent from '../LogicContent';
import styled from 'styled-components';
import Menu from '../Menu';

const Title = styled.div`
	text-align: center;
	font-size: 24px;
	font-weight: 700;
	width: 100%;
	margin-top: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #E0E2E6;
`;

const ImgCards = styled.img`
	width: 290px;
	height: 200px;
`;

const WrBlock = styled.div`
	display: block;
	text-align: center;
	position:relative;
`;

const WrTitle = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	margin: 0 10px 0 10px;
`;

const ItemTitle = styled.div`
	display: flex;
	width: 33.3333%;
	font-size: 14px;
`;

const WrInput = styled.div`
	position: relative;
	width: 100px;
	height: 25px;
`;

const FontIcon = styled.div`
	position: absolute;
	top: 50%;
	left: 5%;
	z-index: 5;
	font-size: 10px;
	transform: translate(0%, -50%);
`;
const InputCards = styled.input`
	width: 100px;
	height: 25px;
	position: relative;
	border-radius: 25px;
	border: none;
	text-align: center;
	outline: none;
`;

const MainWrInput = styled.div`
	position: absolute;
	top: 12%;
	right: 10%;
`;

let title = ['Last Transactions', 'Details', 'Transfer money'];

export default class Device extends Component {

	getTitle(el, i){
		return(
			<ItemTitle key={i}>
				{this.renderPlanFeatures(el)}
			</ItemTitle>
		)
	};

	createMarkup(data) {
		if(data === 'Last Transactions'){
			return {__html: 'Last <br/> Transactions'}
		} else{
			return {__html: data}
		}
	}

	renderPlanFeatures(data) {
			return <div dangerouslySetInnerHTML={this.createMarkup(data)} />;
	}	

	render(){
		return(
			<div>
				<div>
					<Title>
						My Card
					</Title>
					<WrBlock>
						<ImgCards src="./img/cards.png"/>
						<MainWrInput>
							<WrInput>
								<FontIcon className="fas fa-lock"></FontIcon>
								<InputCards placeholder="Reissue my" />
							</WrInput>
						</MainWrInput>
					</WrBlock>
					<WrTitle>
						{title.map((el,i)=> this.getTitle(el,i))}
					</WrTitle>
					<LogicContent/>
					<Menu/>
				</div>
			</div>
		)
	};
};
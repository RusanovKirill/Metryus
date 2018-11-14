import React, { Component } from 'react';
import styled from 'styled-components';

const MainConteiner = styled.div`
	@media (max-width: 360px) {
		width: 100%;
		display: flex;
		margin: 20px 0 20px 0;
		border-bottom: 1px solid #E0E2E6;
  }
`;

const WrFirstBlock = styled.div`
	@media (max-width: 360px) {
		width: 33.3333%;
		display: flex;
		flex-direction: column;
		text-align: left;
  }
`;

const WrSecondBlock = styled.div`
	width: 51.6666%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-content: flex-start;
	margin: auto;
	padding-left: 15px;
`;

const WrLastBlock = styled.div`
	width: 15.0001%;
	text-align: right;
	margin: auto;
`;

const WrContentMain = styled.div`
	margin: 0 10px 0 10px;
	font-size: 12px;
`;

const DataUp = styled.div`
	margin: 5px 0 5px 0;
`;

const DataDown = styled.div`
	margin: 5px 0 5px 0;
`;

const Desc = styled.div`
	margin: 5px 0 5px 0;
`;

const From = styled.div`
	margin: 5px 0 5px 0;
`;

const ViewAll = styled.div`
	text-align: right;
	font-size: 10px;
	padding-right: 3px;
`;

const LinksView = styled.a`
	color: #000000;
	text-decoration: none;
	cursor: pointer;
`;

export default class Content extends Component {

	getContent(item,index){
		let str = item.amount+'';
		let itemFrom = item.from.slice(0,8)+'...';
		if(item.amount < 0 ){
			if(str.slice(0,1) === '-'){
				return (
					<MainConteiner key={index}>
						<WrFirstBlock>
							<DataUp>
								{item.dateTime.split('T')[0]}
							</DataUp>
							<div>
								<img src="./img/down.svg" className="down" alt="arrow"/>
							</div>
							<DataDown>
								{this.renderPlanFeatures(item.dateTime.split('T')[1])}
							</DataDown>
						</WrFirstBlock>
						<WrSecondBlock>
							<Desc>
								{item.description}
							</Desc>
							<From>
								# {itemFrom}
							</From>
						</WrSecondBlock>
						<WrLastBlock>
							{str.replace('-', "-$ ")}
						</WrLastBlock>
					</MainConteiner>
				);
			};
		} else {
			return (
				<MainConteiner key={index}>
					<WrFirstBlock>
						<DataUp>
							{item.dateTime.split('T')[0]}
						</DataUp>
						<div>
							<img src="./img/up.svg" className="up" alt="arrow"/>
						</div>
						<DataDown>
						{this.renderPlanFeatures(item.dateTime.split('T')[1])}
						</DataDown>
					</WrFirstBlock>
					<WrSecondBlock>
						<Desc>
							{item.description}
						</Desc>
						<From>
							# {itemFrom}
						</From>
					</WrSecondBlock>
					<WrLastBlock>
						{str.replace('', '$ ')}
					</WrLastBlock>
				</MainConteiner>
			);
		};
	};

	createMarkup(data) {
		if(data.split(':') > '12'){
			return {__html: `${data} pm`}
		}else{
			return {__html: `${data} am`}
		}
	};

	renderPlanFeatures(data) {
			return <div dangerouslySetInnerHTML={this.createMarkup(data)} />;
	};

	render(){
		return(
			<div>		
				<ViewAll>
					<LinksView href="#"> View all </LinksView>
				</ViewAll>
				<WrContentMain>
					{this.props.data.map((item,index)=> this.getContent(item, index))}
				</WrContentMain>
			</div>
		)
	};
};
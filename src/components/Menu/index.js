import React, { Component } from 'react';
import styled from 'styled-components';

const WrMenu = styled.div`
	width: 50px;
	height: 50px;
	background-color: #39B54A;
	border-radius: 25px;
	position: relative;
	text-align: right;
`;

const BarMenu = styled.i`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: #fff;
`;

const MainWrMenu = styled.div`
	position: fixed;
	z-index: 100;
  bottom: 3%;
	right: 3%;
	cursor: pointer;
`;

export default class Menu extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<MainWrMenu>
				<WrMenu>
					<BarMenu className="fas fa-bars"></BarMenu>
				</WrMenu>
			</MainWrMenu>
		)
	}
}
import React, { Component } from 'react';
import Content from '../Content/';

export default class LogicContent extends Component {

	constructor(props){
		super(props);
		this.state = {
			arr: [],
		}
	};

	componentDidMount(){
		let url = `http://localhost:3001/transactions_card`;

		fetch(url)
			.then(response => response.json())
			.then(response => {
				this.setState({
					arr: response
				});
			});
	};

	render(){
		return(
			<div>
				{this.state.arr.data && <Content data={this.state.arr.data}/>}
			</div>
		)
	};
};
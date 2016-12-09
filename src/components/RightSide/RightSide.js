import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RightSide.css';

import { setRightSidePrice } from '../../actions/index.js';

import RightSideModal from './RightSideModal/RightSideModal.js';


class RightSide extends Component {
	constructor(props) {
		super(props);

		this.state = {
			price: 0,
			newPrice: 0,
			isModalActive: false,
		}

		this.inputPriceOnChange = this.inputPriceOnChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	inputPriceOnChange(event) {
		this.setState({newPrice: event.target.value});
	}

	handleButtonClick() {
		this.props.setRightSidePrice(this.state.newPrice);
		this.props.selectedPrice.leftSidePrice > this.state.newPrice ? this.setState({isModalActive: true}) : null;
	}
	
	render() {
		const { data } = this.props;
		return(
			<div className="rightside">
				<h2>{data.name}: {data.price} руб.</h2>
				<label>
					Ваша цена:
					<input type="text" value={this.state.newPrice} onChange={this.inputPriceOnChange}/>
				</label>
				<button className="btn btn-danger" onClick={this.handleButtonClick}>Продать</button>
				{this.state.isModalActive ? <RightSideModal name={data.name} price={this.state.newPrice}/> : null}
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { selectedPrice } = state;
	return {
		selectedPrice,
	}
}

export default connect(mapStateToProps, { setRightSidePrice })(RightSide);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LeftSide.css';

import { setLeftSidePrice } from '../../actions/index.js';

import LeftSideModal from './LeftSideModal/LeftSideModal.js';
import LeftSideModalSuccess from './LeftSideModalSuccess/LeftSideModalSuccess.js';


class LeftSide extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isDelivery: false,
			isPacked: false,
			isFast: false,

			price: this.props.data.price,
			newPrice: 0,
			lastPrice: 800,
			quantity: 1,

			isModalActive: false,

		}

		this.inputOptionsOnChange = this.inputOptionsOnChange.bind(this);


		this.renderTotalPrice = this.renderTotalPrice.bind(this);

		this.handleButtonLastPriceClick = this.handleButtonLastPriceClick.bind(this);
		this.inputQuantityOnChange = this.inputQuantityOnChange.bind(this);

		this.handleButtonSubmitPrice = this.handleButtonSubmitPrice.bind(this);

		this.closeLeftSideModal = this.closeLeftSideModal.bind(this);
		this.inputNewPriceOnChange = this.inputNewPriceOnChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
        this.setState({price: nextProps.data.price});
    }

	inputOptionsOnChange(event) {
		let { name } = event.target;
		this.setState({[name]: !this.state[name]});
	}

	renderTotalPrice() {
		let calcPrice;
		if(this.state.newPrice > 0) {
			calcPrice = this.state.newPrice;
		}
		else {
			calcPrice = this.state.price;
		}

		let totalPrice = calcPrice * this.state.quantity;

		if(this.state.isDelivery) {
			totalPrice *= 1.05; 
		}

		if(this.state.isPacked) {
			totalPrice *= 1.05; 
		}

		if(this.state.isFast) {
			totalPrice *= 1.20; 
		}

		return totalPrice.toFixed(0);
	}

	handleButtonLastPriceClick() {
		this.setState({newPrice: this.state.lastPrice});
	}

	inputQuantityOnChange(event) {
		this.setState({quantity: event.target.value})
	}

	handleButtonSubmitPrice() {
		this.setState({isModalActive: true});
		if(this.renderTotalPrice() <= this.state.price) {
			this.props.setLeftSidePrice(this.state.price);
		}
		else {
			this.props.setLeftSidePrice(this.renderTotalPrice());
		}
	}

	closeLeftSideModal() {
		this.setState({isModalActive: false});
	}

	inputNewPriceOnChange(event) {
		this.setState({newPrice: event.target.value});
	}

	render() {
		const { data } = this.props;
		return (
			<div className="leftside">
				<h2>{data.name}</h2>
				<img src={data.image}/>
				<p>{data.price} руб.</p>

				<div className="last-price">
					<p>Цена последней сделки: {this.state.lastPrice} руб.</p>
					<button className="btn btn-warning" onClick={this.handleButtonLastPriceClick}>Сделать аналогичную ставку</button>
				</div>
				<label className="quantity">
					Кол-во товара
					<input type="text" value={this.state.quantity} onChange={this.inputQuantityOnChange}/>
				</label>
				<h3>Цена предполагаемой сделки: {this.renderTotalPrice()} руб. </h3>
				<div className="checkboxes">
					<label>
						Доставка (увеличивает цену товара на 5%)
						<input type="checkbox" name="isDelivery" value={this.state.isDelivery} onChange={this.inputOptionsOnChange}/>
					</label>
					<label>
						Упаковка (увеличивает цену товара на 5%)
						<input type="checkbox" name="isPacked" value={this.state.isPacked} onChange={this.inputOptionsOnChange}/>
					</label>
					<label>
						Срочно (увеличивает цену товара на 20%)
						<input type="checkbox" name="isFast" value={this.state.isFast} onChange={this.inputOptionsOnChange}/>
					</label>
				</div>
				<button className="btn btn-success" onClick={this.handleButtonSubmitPrice}>Купить без торга</button>
				<h3>Или предложите вашу цену:</h3>
				<label>
					Ваша цена:
					<input type="text" value={this.state.newPrice} onChange={this.inputNewPriceOnChange} maxLength="3"/>
				</label>
				<button className="btn btn-info" onClick={this.handleButtonSubmitPrice}>Ок</button>
				{this.state.isModalActive ? <LeftSideModal closeModal={this.closeLeftSideModal}/> : null}
				{
					this.props.selectedPrice.leftSidePrice >
					this.props.selectedPrice.rightSidePrice &&
					this.props.selectedPrice.rightSidePrice !== null ? <LeftSideModalSuccess /> : null}
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { selectedPrice } = state;
	return {
		selectedPrice
	}
}

export default connect(mapStateToProps, { setLeftSidePrice })(LeftSide);
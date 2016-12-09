import * as types from './types.js';

export function setLeftSidePrice(price) {
	return {
		type: types.SET_LEFTSIDE_PRICE,
		payload: price
	}
}

export function setRightSidePrice(price) {
	return {
		type: types.SET_RIGHTSIDE_PRICE,
		payload: price
	}
}
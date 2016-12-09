import { combineReducers } from 'redux';

import * as types from '../actions/types.js';

const initialState = {
	leftSidePrice: null,
	rightSidePrice: null
}

const rootReducer = combineReducers({
  selectedPrice: setPrice
});

export default rootReducer;

function setPrice(state = initialState, action) {
	switch(action.type) {
		case types.SET_LEFTSIDE_PRICE:
			return {...state, leftSidePrice: action.payload};	

		case types.SET_RIGHTSIDE_PRICE:
			return {...state, rightSidePrice: action.payload};

		default:
			return state;
	}

	return state;
}
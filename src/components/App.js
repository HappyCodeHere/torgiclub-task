import React, { Component } from 'react';

import { data } from '../data.js';

import './App.css';

import LeftSide from './LeftSide/LeftSide.js';
import RightSide from './RightSide/RightSide.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSelect: 0, 
		}

		this.onSelectChange = this.onSelectChange.bind(this);
	}

	onSelectChange(event) {
		this.setState({currentSelect: event.target.value});
	}

  render() {
    return (
      <div className="app">
        <h2>Выберите товар:</h2>
      	<select onChange={this.onSelectChange}>
      		<option value="0">Огурцы</option>
      		<option value="1">Помидоры</option>
      		<option value="2">Клубника</option>
      	</select>
      	<div>
	        <LeftSide data={data[this.state.currentSelect]}/>
	        <RightSide data={data[this.state.currentSelect]} />
        </div>
      </div>
    );
  }
}

export default App;
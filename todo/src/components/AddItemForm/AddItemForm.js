import React, {Component} from 'react';

import './AddItemForm.css';

export default class AddItemForm extends Component {

	state = {
		taskValue: '',
	}


	onLabelChange = (e) => {
		//when current state not depends in previous, can pass just object
		this.setState({
			taskValue: e.target.value.toUpperCase() //here can control what are typing in component
		})
	}

	submitHandle = (e) => {
		e.preventDefault();
		this.props.onAdding(this.state.taskValue);
		this.setState({
			taskValue: ''
		})
	}

	render() {
		return (
			<form
				className="addItemForm d-flex"
				onSubmit={this.submitHandle}
			>
				<input
					type="text"
					className="form-control formControl"
					onChange={this.onLabelChange}
					placeholder="What's up?"
					value={this.state.taskValue} //this is controlled component
				/>
				<button 
					className="btn btn-outline-secondary"
				>
					Add Item
				</button>
			</form>
		);
	}
}

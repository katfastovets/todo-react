import React, {Component} from 'react';

import './AddItemForm.css';

export default class AddItemForm extends Component {

	render() {
		const {onAdding} = this.props; 

		return (
			<div className="addItemForm">
				<button 
					className="btn btn-outline-secondary"
					onClick={() => onAdding('new ololo')}
				>
					Add Item
				</button>
			</div>
		);
	}
}

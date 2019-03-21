import React, {Component} from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {

	constructor() {
		super();

		this.state = {
			done: false
		}

	}	

	onLabelClick = () => {
		this.setState({
			done: !this.state.done
		})
	}

	render() {

		const {label, important = false} = this.props;

		const { done } = this.state;

		let classNames = 'todo-list-item';

		let classNamesLabel = 'todo-list-item-label';

		if (done) {
			classNames += ' done'
		}

		if (important) {
			classNames += ' todo-list-item-label-important'	
		}


		return (
			<span className={classNames}>
				<span
			        className={classNamesLabel}
			        onClick={ this.onLabelClick } >
			        {label}
			    </span>
			    <button type="button"
			            className="btn btn-outline-success btn-sm float-right">
			        <i className="fa fa-exclamation" />
			    </button>

			    <button type="button"
			            className="btn btn-outline-danger btn-sm float-right">
			    	<i className="fa fa-trash-o" />
			    </button>
			</span>
		)
	}
}
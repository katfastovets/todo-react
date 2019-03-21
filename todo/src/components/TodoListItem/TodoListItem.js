import React, {Component} from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {

	constructor() {
		super();

		this.state = {
			done: false,
			important: false
		}

	}	

	onLabelClick = () => {
		this.setState(({done}) => { //тоже самое, только с деструктуризацией
			return {
				done: !done
			}
		})
	}

	onMarkImportant = () => {
		this.setState((state) => { //setState выполнится только тогда, когда state будет в финальном состоянии
			return {
				important: !state.important
			}
		})
	}

	render() {

		const { label, onDeleted } = this.props;

		const { done, important } = this.state;

		let classNames = 'todo-list-item';

		if (done) {
			classNames += ' done'
		}

		if (important) {
			classNames += ' important'	
		}


		return (
			<span className={classNames}>
				<span
			        className="todo-list-item-label"
			        onClick={ this.onLabelClick } >
			        {label}
			    </span>
			    <button type="button"
			            className="btn btn-outline-success btn-sm float-right"
			            onClick={this.onMarkImportant} >
			        <i className="fa fa-exclamation" />
			    </button>

			    <button type="button"
			            className="btn btn-outline-danger btn-sm float-right"
			            onClick={onDeleted}>
			    	<i className="fa fa-trash-o" />
			    </button>
			</span>
		)
	}
}
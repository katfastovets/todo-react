import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';


export default class App extends Component {

	constructor() {
		super();

		this.state = {
			todoData: [
				{label: 'One1', id: 1},
				{label: 'Two2', id: 2},
				{label: 'Third3', id: 3}
			]
		};

	}

	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);
			console.log(idx);
		})
	};

	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList 
					todos={this.state.todoData} 
					onDeleted={this.deleteItem} />
			</div>
		);
	}
};
import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import AddItemForm from '../AddItemForm';

import './App.css';


export default class App extends Component {

	constructor() {
		super();

		this.maxId = 100;

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

			const newArray = [
			...todoData.slice(0, idx),
			...todoData.slice(idx + 1) ]

			return {
				todoData: newArray
			}
		})
	};

	addItem = (text) => {
		console.log('click on add btn');
		const newItem = {
			label: text,
			id: this.maxId++
		}

		this.setState(({todoData}) => {
			// const newList = todoData.slice();
			// newList.push(newItem);

			const newList = [
				...todoData,
				newItem
			]
			return {
				todoData: newList
			}
		})
	}

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
					onDeleted={this.deleteItem}
				/>
				<AddItemForm
					onAdding={this.addItem}
				/>
			</div>
		);
	}
};
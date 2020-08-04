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
				this.createItem('One1'),
				this.createItem('Two2'),
				this.createItem('Third3'),
			]
		};

	}

	createItem(label) {
		return {
			label,
			done: false,
			important: false,
			id: this.maxId++
		}
	}

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		]
	}

	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);

			const newArray = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			]

			return {
				todoData: newArray
			}
		})
	};

	addItem = (text) => {
		const newItem = this.createItem(text);

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

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		})
	}

	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		})
	}

	render() {
		const {todoData} = this.state;
		const doneCount = todoData.filter((item) => item.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel

					/>
					<ItemStatusFilter />
				</div>
				<TodoList 
					todos={todoData}
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>
				<AddItemForm
					onAdding={this.addItem}
				/>
			</div>
		);
	}
};
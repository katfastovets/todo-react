import React from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

const todoData = [
	{label: 'One1', important: false, id: 1},
	{label: 'Two2', important: true, id: 2},
	{label: 'Third3', important: false, id: 3}
];

const App = () => {
	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3} />
			<div className="top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter />
			</div>
			<TodoList todos={todoData} />
		</div>
	);
};

export default App;
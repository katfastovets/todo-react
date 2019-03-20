import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';

import './index.css';

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

ReactDOM.render(<App />, document.getElementById('root'));
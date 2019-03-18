import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

// export default class index extends React.Component {
// 	static propTypes = {
// 		name: React.PropTypes.string,
// 	};

// 	constructor(props) {
// 		super(props);
// 	}

// 	render() {
// 		return (
// 			<div></div>
// 		);
// 	}
// }

const todoData = [
	{label: 'One1', important: false, id: 1},
	{label: 'Two2', important: true, id: 2},
	{label: 'Third3', important: false, id: 3}
];

const App = () => {

	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList todos={todoData} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';

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

const TodoList = () => {
	const items = ['One', 'Two'];
	return (
        <ul>
            <li>One</li>
            <li>Two</li>
        </ul>
	);
};

const AppHeader = () => {
	return <h1>Todo List</h1>;
};

const SearchPanel = () => {
	return <input placeholder="search" />;
};

const App = () => {

	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
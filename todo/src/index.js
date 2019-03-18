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
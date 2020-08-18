import React from 'react';

import './SearchPanel.css';

const SearchPanel = ({ value, updateValue }) => {
	return (
		<input
			type='text'
			className="form-control search-input"
			placeholder="search"
			value={value}
			onChange={updateValue}
		/>
	);
};

export default SearchPanel;
import React, { useState } from 'react';

import './AddItemForm.css';

const AddItemForm = ({ onAdding }) => {
	const [taskValue, setTaskValue] = useState('');


	const onLabelChange = (e) => {
		setTaskValue(e.target.value.toUpperCase()); //here can control what are typing in component
		//in setState: when current state not depends in previous, can pass just object
	}

	const submitHandle = (e) => {
		e.preventDefault();
		onAdding(taskValue);
		setTaskValue('');
	}

	return (
		<form
			className="addItemForm d-flex"
			onSubmit={submitHandle}
		>
			<input
				type="text"
				className="form-control formControl"
				onChange={onLabelChange}
				placeholder="What's up?"
				value={taskValue} //this is controlled component
			/>
			<button
				className="btn btn-outline-secondary"
			>
				Add Item
			</button>
		</form>
	);
}

export default AddItemForm;

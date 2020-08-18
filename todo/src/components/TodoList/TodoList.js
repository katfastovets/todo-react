import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = (
	{
		todos,
		searchValue,
		onDeleted,
		onToggleImportant,
		onToggleDone,
		status
	}
	) => {

	const createListComponents = (list) => {
		return list.map(item => {
				const {id, ...itemProps} = item;
				return (
					<li key={id} className='list-group-item'>
						<TodoListItem
							{...itemProps}
							onDeleted={() => onDeleted(id)}
							onToggleImportant={() => onToggleImportant(id)}
							onToggleDone={() => onToggleDone(id)}
						/>
					</li>)
			}
		)
	}

	const elements = todos
		.filter(item => {
			switch (status) {
				case 'all':
					return item;
				case 'active':
					return !item.done;
				case 'done':
					return item.done;
				default:
					return item
			}
		})
		.filter(item => {
			return item.label.includes(searchValue) || item.label.toLowerCase().includes(searchValue)
		})

	const elementsToRender = createListComponents(elements)

	return (
        <ul className='list-group todoList'>
            { elementsToRender }
        </ul>
	);
};

export default TodoList;
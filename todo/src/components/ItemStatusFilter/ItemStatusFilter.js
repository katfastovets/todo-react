import React from 'react';

import './ItemStatusFilter.css';

const buttonsConfig = [
	{
		status: 'all',
	},
	{
		status: 'active',
	},
	{
		status: 'done',
	}
]

const ItemStatusFilter = ({ filterStatus, activeStatus }) => {

	const additionalClassName = (status) => {
		return activeStatus === status ? 'btn-info' : 'btn-outline-secondary'
	}

	return (
		<div className="btn-group">
			{buttonsConfig.map(({ status }) => (
				<button
					key={status}
					type="button"
					className={`btn ${additionalClassName(status)}`}
					onClick={() => filterStatus(status)}
				>
					{status.charAt(0).toUpperCase() + status.slice(1)}
				</button>
			))}
		</div>
	);
}

export default ItemStatusFilter;
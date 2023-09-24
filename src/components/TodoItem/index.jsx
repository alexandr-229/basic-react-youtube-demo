import React from 'react';
import styles from './styles.module.css';

export const TodoItem = ({ title, checked, id, completeTodo }) => {
	return (
		<div className={styles.wrapper}>
			<input type="checkbox" checked={checked} onChange={() => completeTodo(id)} />
			<p>{title}</p>
		</div>
	)
};

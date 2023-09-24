import { useState } from 'react';
import styles from './styles.module.css';
import plus from './plus.svg';

export const Header = ({ addTodo }) => {
	const [value, setValue] = useState('');
	const [showInput, setShowInput] = useState(false);

	const add = (event) => {
		event.preventDefault();
		if (!value.trim().length) {
			return;
		}
		addTodo(value);
		setValue('');
	};

	return (
		<>
			<div className={styles.header}>
				<p>Tasks List</p>
				<img src={plus} alt="Add item" onClick={() => setShowInput(true)} />
			</div>
			{showInput && (
				<form onSubmit={add}>
					<input className={styles.input} value={value} onChange={(e) => setValue(e.target.value)} />
				</form>
			)}
		</>
	)
};

import { TodoItem } from '../TodoItem';
import styles from './styles.module.css';

export const TodoList = ({ todos, completeTodo }) => {

	return (
		<div className={styles.wrapper}>
			{todos.map((todo) => (
				<TodoItem title={todo.title} checked={todo.checked} completeTodo={completeTodo} id={todo.id} />
			))}
		</div>
	)
};

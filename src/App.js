import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import styles from './App.module.css';

const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const result = await response.json();
    return result;
  } catch(e) {
    console.log(`ERROR: ${e}`);
    return [];
  }
};

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(res => {
      const newTodos = res.map((item) => ({
        id: item.id,
        title: item.title,
        checked: item.completed,
      }));
      setTodos(newTodos);
    })
  }, []);

  const completeTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    }))
  };

  const addTodo = (title) => {
    setTodos([{ checked: false, title, id: Math.random() }, ...todos]);
  };

  return (
    <div className={styles.wrapper}>
      <Header addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default App;

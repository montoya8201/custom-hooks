import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


const init = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || "[]");
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    const action = {
      type: "[TODO] add todo",
      payload: newTodo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] delete todo",
      payload: id,
    };

    dispatch(action);
  };
  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] toggle todo",
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo =>!todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
};

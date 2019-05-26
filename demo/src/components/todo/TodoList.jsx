import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
const TodoList = ({ todos, onRemove, onDoing }) => {
  const renderTodoList = () => {
    return todos.map(todo => (
      <div key={todo.todoId}>
        <Todo content={todo.content} completed={todo.completed} />
        <button onClick={() => onRemove(todo.todoId)}>Remove task</button>
        <button onClick={() => onDoing(todo.todoId)}>Doing task</button>
      </div>
    ));
  };

  return (
    <>
      <h1>todo list</h1>
      <ul>{renderTodoList()}</ul>
    </>
  );
};
TodoList.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onDoing: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todoId: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};
export default TodoList;

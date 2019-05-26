import React from "react";
import PropTypes from "prop-types";
const Todo = ({ completed, content }) => {
  const renderTodo = () => {
    return (
      <li
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {content}
      </li>
    );
  };
  return <>{renderTodo()}</>;
};
Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired
};
export default Todo;

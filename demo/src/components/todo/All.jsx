import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {makeMapStateToProps} from '../todo/selectors/'
import Todo from "./Todo";

const All = ({ filter, list }) => {
  const renderAll = () => {
    return list.map(todo => (
      <div key={todo.todoId}>
        <Todo content={todo.content} completed={todo.completed} />
      </div>
    ));
  };
  return (
    <>
      <h1>all list</h1>
      <ul>{renderAll()}</ul>
    </>
  );
};
All.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      todoId: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  filter: PropTypes.string.isRequired
};

export default connect(makeMapStateToProps)(All);

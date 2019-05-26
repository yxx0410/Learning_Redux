import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
const Doing = ({ doings, onCompleted }) => {
  const renderDoing = () => {
    return doings.map(doing => (
      <div key={doing.doingId}>
        <Todo content={doing.content} completed={doing.completed} />
        <button disabled={doing.completed} onClick={() => onCompleted(doing.doingId)}>Completed task</button>
      </div>
    ));
  };

  return (
    <>
      <h1>doing list</h1>
      <ul>{renderDoing()}</ul>
    </>
  );
};
Doing.propTypes = {
  onCompleted: PropTypes.func.isRequired,
  doings: PropTypes.arrayOf(
    PropTypes.shape({
      doingId: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};
export default Doing;

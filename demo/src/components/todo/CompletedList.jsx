import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
const Completed = ({ completions }) => {
  const renderCompleted = () => {
    return completions.map(completion => (
      <div key={completion.doingId}>
        <Todo content={completion.content} completed={false} />
      </div>
    ));
  };
  return (
    <>
      <h1>completion list</h1>
      <ul>{renderCompleted()}</ul>
    </>
  );
};
Completed.propTypes = {
  completions: PropTypes.arrayOf(
    PropTypes.shape({
      doingId: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};
export default Completed;

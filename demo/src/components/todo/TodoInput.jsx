import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "./action/todo";
const TodoInput = ({ onClick }) => {
  const [input, setInput] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          onClick(input);
          setInput("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

TodoInput.propTypes = {
  onClick: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onClick: content => dispatch(addTodo(content))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoInput);

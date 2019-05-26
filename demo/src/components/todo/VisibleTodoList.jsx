import { connect } from "react-redux";
import { removeTodo, moveTodoToDoing } from "./action/todo";
import { getVisibilityTodosArray } from "../todo/selectors/index";
import TodoList from "./TodoList";

const mapStateToProps = state => {
  return {
    todos: getVisibilityTodosArray(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(removeTodo(id)),
    onDoing: id => dispatch(moveTodoToDoing(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

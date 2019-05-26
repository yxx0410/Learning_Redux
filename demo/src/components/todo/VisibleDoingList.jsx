import { connect } from "react-redux";
import {
  // toggleTodo,
  // visibilityFilters,
  completeDoing
} from "./action/todo";
import { getDoingArray } from "../todo/selectors/index";
import DoingList from "./DoingList";

// const getDoingList = list => {
//   let doingList = [];
//   for (let i in list) {
//     doingList.push(list[i]);
//   }
//   return doingList;
// };

const mapStateToProps = state => {
  return {
    // doings: getDoingList(state.doing)
    doings: getDoingArray(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // onClick: id => dispatch(toggleTodo(id)),
    onCompleted: id => dispatch(completeDoing(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoingList);

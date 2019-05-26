import { combineReducers } from "redux";
import { todoActions, visibilityFilters, visibilityFilterActions } from "../action/todo";
import {
  // visibilityFilter,
  addTodo,
  removeTodo,
  doing
} from "./reducerGenerator";
// first part of reducer: (state,action)=> new state, a function return new state base on givin action, like array.reduce
// second part of reducer: split reducer
// splitting #1 slice reducer, each reducer handle the specific a part of state based on the logic
const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case visibilityFilterActions.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};
const todos = (state = {}, action) => {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return addTodo(state, action);
    case todoActions.REMOVE_TODO:
      return removeTodo(state, action);
    default:
      return state;
  }
};
// let doingId = 0;
// const doing = (state = {}, action) => {
//   switch (action.type) {
//     case doingActions.ADD_DOING:
//       const id = doingId++;
//       return {
//         ...state,
//         [id]: {
//           ...action.todo,
//           doingId: id
//         }
//       };
//     case doingActions.COMPLETE_DOING:
//       return state.filter(doing => doing.dongId !== action.doingId);
//     default:
//       return state;
//   }
// };
// splitting #4 high order reducer (reducer)=> reducer
const reducer = combineReducers({
  todos,
  doing,
  visibilityFilter
});
export default reducer;

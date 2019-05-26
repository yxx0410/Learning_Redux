// first part of action: type, make types constant is good to reuse

const todoActions = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO"
};
const visibilityFilterActions = {
  SET_FILTER: "SET_FILTER"
};
const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};
// second part of action: action creator: an function return an action object with own payload
const addTodo = content => ({
  type: todoActions.ADD_TODO,
  content
});

// third part of action: action creator generator: a functoin return an action creator with given type and payload properties' name
const actionGenerator = (type, ...argsName) => (...args) => {
  let action = {
    type
  };
  argsName.forEach((name, index) => {
    action[argsName[index]] = args[index];
  });

  return action;
};

const toggleTodo = actionGenerator(todoActions.TOGGLE_TODO, "todoId");
const removeTodo = actionGenerator(todoActions.REMOVE_TODO, "todoId");
const visibilityFilter = actionGenerator(
  visibilityFilterActions.SET_FILTER,
  "filter"
);

// fourth part of action: async action creator: an function return a function include multiple calculation and dispatch actions
// change logic move a todo item from todo list to doing list

const doingActions = {
  ADD_DOING: "ADD_DOING",
  COMPLETE_DOING: "COMPLETE_DOING"
};

const addDoing = actionGenerator(doingActions.ADD_DOING, "todo");
const completeDoing = actionGenerator(doingActions.COMPLETE_DOING, "doingId");

// 2 dipatches 1. remove todo 2. add doing which should be a async action
const moveTodoToDoing = todoId => (dispatch, getState) => {
  // let doing;
  // getState().todos.map(todo => {
  //   if (todo.todoId === todoId) {
  //     doing = todo;
  //   }
  // });
  // pick todo id from state and remove it then add to doing list
  const doing = getState().todos[todoId];
  if (doing.completed) {
    return;
  }
  dispatch(removeTodo(todoId));
  dispatch(addDoing(doing));
};
export const AllListActions = {
  ADD_TODO: "ADD_TODO"
};
const addAll = actionGenerator(AllListActions.ADD_TODO, "all");
export {
  todoActions,
  visibilityFilterActions,
  addTodo,
  toggleTodo,
  removeTodo,
  doingActions,
  addDoing,
  completeDoing,
  visibilityFilter,
  visibilityFilters,
  moveTodoToDoing,
  addAll,
};

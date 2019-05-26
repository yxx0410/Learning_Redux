import { visibilityFilters } from "../action/todo";
import { createSelector } from "reselect";
// # Reselect
// Reselect is a simple library for creating memoized, composable selector functions.
// Reselect selectors can be used to efficiently compute derived data from the Redux store.

// avoid unnecessary calculation of state when map them to props
// use cache value when render caused state change
// like react.useMemo

const getTodoList = list => {
  let todoList = [];
  for (let i in list) {
    todoList.push(list[i]);
  }
  return todoList;
};
// #1 a function return specific state to store in cache

const getTodos = state => getTodoList(state.todos);
const getVisibilityFilter = state => state.visibilityFilter;

export const getVisibilityTodosArray = createSelector(
  // watch state to be cached
  [getVisibilityFilter, getTodos],

  // #2 calculation logic if state changed
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case visibilityFilters.SHOW_ALL:
        return todos;
      case visibilityFilters.SHOW_COMPLETED:
        return todos.filter(todo => todo.completed);
      case visibilityFilters.SHOW_ACTIVE:
        return todos.filter(todo => !todo.completed);
    }
  }
);
// # apply selector in mapStateToProps to get state;
const getDoing = state => state.doing;
export const getDoingArray = createSelector(
  [getDoing],
  doing => {
    return getTodoList(doing);
  }
);
export const getCompletedArray = createSelector(
  [getDoing],
  doing => {
    const todos = getTodoList(doing);
    return todos.filter(todo => todo.completed);
  }
);

// reselect with props
// # get cached data given props and state
const getAll = (state, props) => state[props.filter];
// # a function return a Selector instead of selector directly
// as props change will result re-calcualte
const makeGetVisibleTodos = () => {
  return createSelector(
    [getAll],
    list => {
      return getTodoList(list);
    }
  );
};
// # get props and state from mapStateToProps
// # pass props and state to selector function return by selector generator
export const makeMapStateToProps = () => {
  const getAllList = makeGetVisibleTodos();
  const mapStateToProps = (state, props) => {
    return {
      list: getAllList(state, props)
    };
  };
  return mapStateToProps;
};

// ## selector = (state)=>createSeletor([getState(),getState()],calculation)
// ## mapStateToProp = state => ({
  // data : selector(state)
// })

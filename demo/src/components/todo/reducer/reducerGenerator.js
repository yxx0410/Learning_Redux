import {
  visibilityFilterActions,
  visibilityFilters,
  todoActions,
  doingActions,
  AllListActions
} from "../action/todo";
// seperate reducer to utility function to handle specific action.type as handler
// handlers = {action.type:(state,action)=>{return newState}}
const reducerGenerator = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};
//
const setFilter = (state, action) => action.filter;
export const visibilityFilter = reducerGenerator(visibilityFilters.SHOW_ALL, {
  [visibilityFilterActions.SET_FILTER]: setFilter
});
let todoId = 0;
export const addTodo = (state, action) => {
  const id = todoId++;
  return {
    ...state,
    [id]: {
      todoId: id,
      content: action.content,
      completed: false
    }
  };
};
export const removeTodo = (state, action) => {
  let newState = {};
  for (let i in state) {
    if (i !== action.todoId.toString()) {
      console.log(i);
      console.log(action.todoId);
      newState[i] = state[i];
    }
  }
  return newState;
};
let doingId = 0;
export const addDoing = (state, action) => {
  const id = doingId++;
  return {
    ...state,
    [id]: {
      ...action.todo,
      doingId: id
    }
  };
};
export const completeDoing = target => (state, action) => {
  return {
    ...state,
    [action.doingId]: {
      ...state[action.doingId],
      [target]: !state[action.doingId][target]
    }
  };
};
const todosHandlers = {
  [todoActions.ADD_TODO]: addTodo,
  [todoActions.REMOVE_TODO]: removeTodo
};
const doingsHandlers = {
  [doingActions.ADD_DOING]: addDoing,
  [doingActions.COMPLETE_DOING]: completeDoing("completed")
};
export const todos = reducerGenerator({}, todosHandlers);
export const doing = reducerGenerator({}, doingsHandlers);
let id = 0;
export const addAll = (state, action) => {
  const allId = id++;
  return {
    ...state,
    [allId]: {
      id: allId,
      status: "TODO",
      content: action.content
    }
  };
};
const allHandlers = {
  [AllListActions.ADD_TODO]: addAll
};
export const all = reducerGenerator({}, allHandlers);

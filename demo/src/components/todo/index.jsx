import React from "react";
import { Provider } from "react-redux";
import store, { storeConfiguration } from "./store/todo";
import TodoInput from "./TodoInput";
import VisibleTodoList from "./VisibleTodoList";
import VisibleDoingList from "./VisibleDoingList";
import VisibleCompletedList from "./VisibleCompletedList";
import VisibleAllList from "./VisibleAllList";

const TodoApp = () => {
  console.log(store.getState());
  return (
    <Provider store={storeConfiguration()}>
      <div style={{"display":"flex"}}>
        <div>
          <TodoInput />
          <VisibleTodoList />
          <VisibleDoingList />
          <VisibleCompletedList />
        </div>
        <div>
          <VisibleAllList />
        </div>
      </div>
    </Provider>
  );
};
export default TodoApp;

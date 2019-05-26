import React from "react";
import All from "./All";
const VisibleAllList = () => {
  const [filter, setFilter] = React.useState("todos");
  return (
    <>
      <select
        name=""
        id=""
        onChange={e => {
          setFilter(e.target.value);
        }}
      >
        <option value="todos">todos</option>
        <option value="doing">doing</option>
      </select>
      <All filter={filter} />
    </>
  );
};

export default VisibleAllList;

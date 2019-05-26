// es6 ...rest parameter
const actionGenerator = (type, ...argNames) => {
  // return an action creator
  return (...args) => {
    //es6 {variable}={variableName:variableValue}
    const action = { type };
    // iterate action proptery name
    argNames.forEach((arg, index) => {
      // pass action creator's parameter action value to relative propertyname
      action[argNames[index]] = args[index];
    });
    //return action object in action creator
    return action;
  };
};
const addTodo = actionGenerator("ADD_TO_TO", "title", "content");
console.log(addTodo(1));

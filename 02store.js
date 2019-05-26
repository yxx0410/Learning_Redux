// middleware
const logger = store => next => action => {
  console.log(actoin.type);
  console.log("dispaction", action);

  //wrap dispatch
  let result = next(action);

  console.log("next state", store.getState());
  // return the wrapped dispatch
  return result;
};

//

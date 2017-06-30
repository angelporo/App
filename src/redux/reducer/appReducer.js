import initState from '../initSate';
let appReducer = (state=initState, action ) => {
  switch(action.type) {
  case "INIT" :
    return state.count + 1;
  default:
    return state;
  }
}

export default appReducer;

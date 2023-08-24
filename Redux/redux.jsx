/** createStore 
 * const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer)
 */
/** Get state from Redux store
 * onst store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState()
 */
/** Define a redux action
 * const action = {
  type: 'LOGIN'
}
// Action creator
const action = {
  type: 'LOGIN'
}
function actionCreator() {
  return action;
}
// dispatch
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction())

// Reducer
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if(action.type === 'LOGIN') {
    return {
      login: true
    }   
  } else {
    return state
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
 */

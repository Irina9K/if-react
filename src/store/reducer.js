// const initialState = {
//   value: false,
// };
//
// function logReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'LOG_IN':
//       return {
//         ...state,
//         value: true,
//       };
//     case 'LOG_OUT':
//       return {
//         ...state,
//         value: false,
//       };
//     default:
//       return state;
//   }
// }
// export default logReducer;

import { combineActions, handleActions } from 'redux-actions';
import { logInAction, logOutAction } from './actions';

export const defaultState = {
  value: false,
};

const reducer = handleActions(
  {
    [combineActions(logInAction, logOutAction)]: (state) => ({
      ...state,
      value: true,
    }),
  },
  defaultState,
);

// console.log(logInAction());
// console.log(logOutAction());
console.log(reducer);

export default reducer;

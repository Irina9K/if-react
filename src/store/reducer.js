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
import allActions from './actions';

export const defaultState = {
  value: false,
};

const reducer = handleActions(
  {
    [combineActions(allActions.logInAction, allActions.logOutAction)]: (
      state,
      { payload: { a } },
    ) => ({
      ...state, value: !a,
    }),
  },
  defaultState,
);

console.log(allActions.logInAction());
console.log(allActions.logOutAction());

export default reducer;

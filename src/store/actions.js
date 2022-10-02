// import { LOG_IN, LOG_OUT } from './actionTypes';
//
// const logInAction = () => ({
//   type: LOG_IN,
// });
//
// const logOutAction = () => ({
//   type: LOG_OUT,
// });
//
// export default {
//   logInAction,
//   logOutAction,
// };

import { createAction } from 'redux-actions';

const logInAction = createAction('LOG_IN', (a = true) => a);
const logOutAction = createAction('LOG_OUT', (a = true) => !a);

export default {
  logInAction,
  logOutAction,
};

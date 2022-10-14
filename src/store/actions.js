import { createAction } from 'redux-actions';

const logInAction = createAction('LOG_IN', (isAuth = true) => ({
  isAuth,
}));
const logOutAction = createAction('LOG_OUT', (isAuth = false) => ({
  isAuth,
}));

export { logInAction, logOutAction };

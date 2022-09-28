import { LOG_IN, LOG_OUT } from './actionTypes';

const logInAction = () => ({
  type: LOG_IN,
});

const logOutAction = () => ({
  type: LOG_OUT,
});

export default {
  logInAction,
  logOutAction,
};

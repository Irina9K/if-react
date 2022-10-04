import { combineActions, handleActions } from 'redux-actions';
import { logInAction, logOutAction } from './actions';

const defaultState = {
  valueDefaultState: false,
};

const reducer = handleActions(
  {
    [combineActions(logInAction, logOutAction)]: (state, { payload: { isAuth } }) => ({
      ...state,
      valueDefaultState: isAuth,
    }),
  },
  defaultState,
);

export { reducer, defaultState };

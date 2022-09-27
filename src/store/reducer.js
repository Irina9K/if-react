const initialState = {
  value: false,
};

function logReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        value: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        value: false,
      };
    default:
      return state;
  }
}
export default logReducer;

const defaultState = {
  hotels: [],
};

export const SET_HOTELS = 'SET_HOTELS';
export const FETCH_HOTELS = 'FETCH_HOTELS';

export default function hotelReducer(state = defaultState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: action.payload,
      };
  }
  return state;
}

export const setHotels = (payload) => ({
  type: SET_HOTELS,
  payload,
});
export const fetchHotels = () => ({
  type: FETCH_HOTELS,
});

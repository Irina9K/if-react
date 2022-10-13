import { FETCH_HOTELS,
  REQUEST_HOTELS_SUCCESS,
  REQUEST_HOTELS_FAILED,
  REQUEST_HOTELS } from './actionsTypes';

export const requestHotels = () => ({
  type: REQUEST_HOTELS,
});

export const fetchHotels = () => ({
  type: FETCH_HOTELS,
});

export const requestHotelsSuccess = (data) => ({
  type: REQUEST_HOTELS_SUCCESS,
  url: data.message,
});

export const requestHotelsError = () => ({
  type: REQUEST_HOTELS_FAILED,
});

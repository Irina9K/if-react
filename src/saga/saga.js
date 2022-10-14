import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_HOTELS, setHotels } from '../store/reducerHotels';

const fetchHotelsFromApi = () => fetch('https://fe-student-api.herokuapp.com/api/hotels');

function* fetchHotelWorker() {
  const data = yield call(fetchHotelsFromApi);
  // eslint-disable-next-line no-promise-executor-return
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setHotels(json));
}

export function* hotelWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelWorker);
}

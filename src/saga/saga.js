import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_HOTELS, setHotels } from '../store/reducerHotels';
import { API_URL, PATH_FOR_SEARCH_HOTELS } from '../constants/api.constants';

const fetchHotelsFromApi = ({ payload }) => {
  console.log(payload);
  fetch(
    `${API_URL}/${PATH_FOR_SEARCH_HOTELS}=${payload.inputValue}&dateFrom=${payload.dateIn}&dateTo${payload.dateOut}&adults=${payload.numberAdults}&children=${payload.numberChildren}&rooms=${payload.numberRooms}`,
  );
};

function* fetchHotelWorker(inputValue, dateIn, dateOut, numberAdults, numberChildren, numberRooms) {
  const data = yield call(
    fetchHotelsFromApi,
    inputValue,
    dateIn,
    dateOut,
    numberAdults,
    numberChildren,
    numberRooms,
  );
  // eslint-disable-next-line no-promise-executor-return
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setHotels(json));
}

export function* hotelWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelWorker);
}

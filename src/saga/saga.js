import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USERS, setUsers } from '../store/reducerHotels';

const fetchUsersFromApi = () => fetch('https://fe-student-api.herokuapp.com/api/hotels');

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  // eslint-disable-next-line no-promise-executor-return
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}

export function* rootWatcher() {
  yield userWatcher();
}

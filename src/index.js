import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import hotelReducer from './store/reducerHotels';
import { hotelWatcher } from './saga/saga';

import App from './App';
import { reducer /* defaultState */ } from './store/reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducer,
  hotelReducer,
});

// const persistedStore = persistReducer(persistConfig, rootReducer);

const store = createStore(/* persistedStore, */ rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(hotelWatcher);
console.log(store.getState());

// const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     {/* <PersistGate persistor={persistor}> */}
  <React.StrictMode>
    <App />
  </React.StrictMode>,
   {/* </PersistGate> */}
   </Provider>,
);

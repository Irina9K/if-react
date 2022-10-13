import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { watchFeatchHotels } from './saga/saga';
import App from './App';
import { reducer, defaultState } from './store/reducer';

const sagaMiddlleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedStore = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedStore,
  defaultState,
  applyMiddleware(sagaMiddlleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagaMiddlleware.run(watchFeatchHotels);

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
);

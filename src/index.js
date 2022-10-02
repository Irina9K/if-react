import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reducer from './store/reducer';

window.React = React;

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedStore = persistReducer(persistConfig, reducer);

const store = createStore(
    reducer,
  // persistedStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/*<PersistGate persistor={persistor}>*/}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/*</PersistGate>*/}
    ,
  </Provider>,
);

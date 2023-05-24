import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  pReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor, PersistGate, Provider };

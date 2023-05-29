import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore, persistReducer, Persistor  } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import rootReducer from './reducers';
import sagas from './sagas';


const createNoopStorage = () => {
   return {
      getItem(_key: any) {
         return Promise.resolve(null);
      },
      setItem(_key: any, value: any) {
         return Promise.resolve(value);
      },
      removeItem(_key: any) {
         return Promise.resolve();
      },
   };
};
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// Kiểu RootState của Redux Store
type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'app'],
};

const persistedReducer  = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const sagaMiddleware = createSagaMiddleware();

const store: Store<RootState> = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

// Khởi tạo Redux Persist
const persistor: Persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };


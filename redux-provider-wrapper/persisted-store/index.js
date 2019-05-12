import { createStore, combineReducers } from 'redux';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { reducers } from '../../src/store';

import migrations from './migrations';

const rootReducer = combineReducers(reducers);
const persistConfig = {
  key: 'cartReducer',
  whitelist: 'cartReducer',
  storage,
  version: 1,
  migrate: createMigrate(migrations, { debug: false }),
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};
const store = createStore(persistedReducer, initialState);
const persistor = persistStore(store);

export {
  store,
  persistor,
};

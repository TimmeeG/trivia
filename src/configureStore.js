import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';

const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, createLogger()];

const enhancer = compose(applyMiddleware(...middleware));

export const store = createStore(
  persistedReducer,
  composeWithDevTools(enhancer),
);

export const persistor = persistStore(store);

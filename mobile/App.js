import React from 'react';
import { StatusBar } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from './redux/reducer/authReducer';
import Navigation from './navigation';

const root = combineReducers({
  auth: AuthReducer,
})

const store = createStore(root, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
        <StatusBar barStyle='default' />
        <Navigation />
    </Provider>
  );
}



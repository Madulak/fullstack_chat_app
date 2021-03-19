import React from 'react';
import { StatusBar } from 'react-native';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from './redux/reducer/authReducer';
import ChatReducer from './redux/reducer/chatReducer';
import Navigation from './navigation';

const root = combineReducers({
  auth: AuthReducer,
  chat: ChatReducer,
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



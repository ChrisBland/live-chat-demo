"use strict";
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App.jsx'
import reducer from './reducers'
import Socket from './socket';

const store = createStore(reducer)

window.loadApp = function(socket){
  var height = window.innerHeight;
  Socket.handleSocketEvents(store.dispatch, socket);
  render(
    <Provider store={store}>
      <App height={height}/>
    </Provider>,
    document.getElementById('app-container')
  )
}


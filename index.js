
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App.js'
import reducer from './reducers/reducerTest.js'
var store=createStore(reducer)
render(
	<Provider store={store}>
    <App />
	</Provider>,
	document.getElementById('root')
	)
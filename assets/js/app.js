// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"
import "phoenix_html"
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers'
import { Root } from './components/Root'

const store = createStore(reducers)

render(
  <Root store={store} />, document.querySelector('.app'))
import React, { Component } from 'react'
import { render } from 'react-dom'
var ReactDOM = require('react-dom/client')

import Header from './components/header/index'

function ready (fn) {
  if (document.readyState != 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

const renderComponents = (componentName, componentClass) => {
  ready(() => {
    document
      .querySelectorAll(`[react-component="${componentName}"]`)
      .forEach(el => {
        const props = JSON.parse(el.getAttribute('react-props') || '{}')
        const root = ReactDOM.createRoot(el)
        props['firstDiv'] = el.getElementsByTagName('div')[0]
        root.render(
          React.createElement(
            componentClass,
            props,
            el.getElementsByTagName('div')[0]
          )
        )
      })
  })
}

renderComponents('HeaderRender', Header)

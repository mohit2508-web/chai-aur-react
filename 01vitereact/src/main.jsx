import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactElement=React.createElement(
  'a',
  {href:'https://google.com/github/hiteshchaudhary',target: '_blank'},
  'click me to visit github'
)
ReactDOM.createRoot(document.getElementById('root')).render(
reactElement
)

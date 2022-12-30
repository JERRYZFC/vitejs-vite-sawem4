import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoEveryday from './component/TodoEveryday'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoEveryday name="zzzz" />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{provider}from'react-redux'
import{store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <provider store={store}>
    <App />
  </provider>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import LeafMap from './LeafMap.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Provider store={store}>
    <App />
      
      {/* <LeafMap/> */}

    </Provider>
  </React.StrictMode>,
)

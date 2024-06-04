import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Principal from './components/ComponentsInitial/Principal.jsx'

import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken = 'pk.eyJ1Ijoicm9uYWxkdWFncm0iLCJhIjoiY2x0dnB0ZGRqMXBmODJqc3lmODVrdWdrYyJ9.neqEa6j7_rpPpNaj49I5iA';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Principal/> */}
  </React.StrictMode>,
)

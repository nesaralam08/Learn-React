import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './style.css'
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
const page1 = createRoot(document.getElementById('page1'));
page1.render(
  <React.StrictMode>
    <>
      <Page1/>
    </>
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('page2')).render(
  <React.StrictMode>
    <>
    <Page2/>
    </>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('page3')).render(
  <React.StrictMode>
    <>
    <Page3/>
    </>
  </React.StrictMode>
)
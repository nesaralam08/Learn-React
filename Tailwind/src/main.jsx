import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Card from './components/card.jsx'
import Footer from './components/footer.jsx'


let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Card userName="Nesar"/>
    <Footer/>
    </>
  </React.StrictMode>
)

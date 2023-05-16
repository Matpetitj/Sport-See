import './Utils/Style-global/_app.scss'
import React from 'react'
import TopBar from './components/TopBar/topBar'
import LeftBar from './components/LeftBar/leftBar'
// import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="global__style">
      <div className="topBar">
        <TopBar />
      </div>
      <div className='"leftBar'>
        <LeftBar />
      </div>
    </div>
  )
}

export default App

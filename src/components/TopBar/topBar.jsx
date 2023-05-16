import React from 'react'
import './_topbar.scss'
import Navigation from '../Navigation/Navigation'
// import logo from '../../assets/Images/logo.svg'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="topbar__logo">
          <span className="topbar__logo__svg">Logo</span>
          <h1 className="topbar__logo__title">SportSee</h1>
        </div>
        <div className="topbar__navigation">
          <Navigation />
        </div>
      </div>
    </div>
  )
}

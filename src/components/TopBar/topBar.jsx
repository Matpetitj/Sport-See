import React from 'react'
import './_topbar.scss'
import Navigation from '../Navigation/Navigation'
import logo from '../../assets/Images/logo.svg'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="topbar__logo">
          <img className="topbar__logo__svg" src={logo} alt="SportSee logo" />
        </div>
        <div className="topbar__navigation">
          <Navigation />
        </div>
      </div>
    </div>
  )
}

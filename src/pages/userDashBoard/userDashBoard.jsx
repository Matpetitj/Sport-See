import React from 'react'
import { useState, useEffect } from 'react'
import './_userDashBoard.scss'

export default function userDashBoard(id) {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__title">Bonjour</h1>
      </div>
      <div className="dashboard__leftblock">
        <p>left block</p>
      </div>
      <div className="dashboard__rightblock">
        <p>right block</p>
      </div>
    </div>
  )
}

import React from 'react'
import { useState, useEffect } from 'react'
import { simulateEndpoint, callApi } from '../../API/ApiCallMocks'
// import Error from '../Error/Error'

import './_userDashBoard.scoped.scss'

async function getUserData(id) {
  const userData = await callApi(id, '')
  const firstName = userData.userInfos.firstName
  return firstName
}

export default function UserDashBoard(id) {
  const user = getUserData(id)
  const name = user.data.userInfos.firstName

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__title">Bonjour {name}</h1>
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

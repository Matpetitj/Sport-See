import React from 'react'
import './_leftbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
// import personYoga from '../../assets/Images/sitting-person.svg'

export default function LeftBar() {
  //   const personSitting = { personYoga }
  const personSwimming = <FontAwesomeIcon icon={faPersonSwimming} />
  const personBiking = <FontAwesomeIcon icon={faPersonBiking} />
  const dumbbell = <FontAwesomeIcon icon={faDumbbell} />

  return (
    <div className="leftbar">
      <div className="leftbar__container">
        <div className="leftbar__icon">
          <span className="leftbar__icon__fw"></span>
          <span className="leftbar__icon__fw">{personSwimming}</span>
          <span className="leftbar__icon__fw">{personBiking}</span>
          <span className="leftbar__icon__fw">{dumbbell}</span>
        </div>
        <span className="leftbar__text">Copiryght, SportSee 2020</span>
      </div>
    </div>
  )
}

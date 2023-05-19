import React from 'react'
import './_leftbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import personSat from '../../assets/Images/person-sitting.svg'

export default function LeftBar() {
  const personSwimming = <FontAwesomeIcon icon={faPersonSwimming} />
  const personBiking = <FontAwesomeIcon icon={faPersonBiking} />
  const dumbbell = <FontAwesomeIcon icon={faDumbbell} />

  return (
    <div className="leftbar">
      <div className="leftbar__container">
        <div className="leftbar__icon">
          <span className='leftbar__icon__fw'>
            <img className="sat" src={personSat} alt="person sat" />
          </span>
          <span className="leftbar__icon__fw swimming">{personSwimming}</span>
          <span className="leftbar__icon__fw biking">{personBiking}</span>
          <span className="leftbar__icon__fw dumbbell">{dumbbell}</span>
        </div>
        <span className="leftbar__text">Copiryght, SportSee 2020</span>
      </div>
    </div>
  )
}

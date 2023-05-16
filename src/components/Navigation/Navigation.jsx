import React from 'react'
import './_navigation.scss'

export default function Navigation() {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list__li">Accueil</li>
        <li className="navigation__list__li">Profil</li>
        <li className="navigation__list__li">Réglage</li>
        <li className="navigation__list__li">Communauté</li>
      </ul>
    </div>
  )
}

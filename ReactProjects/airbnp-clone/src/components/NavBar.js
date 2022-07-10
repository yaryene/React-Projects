import React from 'react'
import logo from '../images/airbnb-logo.svg';
import '../style.css'

export default function NavBar() {
  return (
    <nav>
        <img src={logo} className="nav--logo"/>
    </nav>
  )
}

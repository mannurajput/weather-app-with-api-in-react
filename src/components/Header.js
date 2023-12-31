import React from 'react'
import '../Styles/Header.css'
import Icon from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className='header'>
        <img alt='logo' src={Icon} className='logo'/>
        <h1 className='title'>Forecaster</h1>
    </header>
  )
}

import React from 'react'
import { ContainerHeader } from './HeaderStyle'
import LogoListto from '../../assets/logo-listto.png'

const HeaderComponent = () => {
  return (
    <ContainerHeader>
        <img src={LogoListto}/>
        <nav>
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/support">Support</a>
            <a href="/login">Login</a>
        </nav>
    </ContainerHeader>
  )
}

export default HeaderComponent
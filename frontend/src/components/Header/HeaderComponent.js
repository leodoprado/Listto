import React from 'react'
import { ContainerHeader } from './HeaderStyle'
import LogoListto from '../../assets/logo-listto.png'

const HeaderComponent = () => {
  return (
    <ContainerHeader>
        <img src={LogoListto}/>
        <nav>
            <a href="/">Home</a>
            <a href="/informacoes">Features</a>
            <a href="/registrar">Contacts</a>
            <a href="/entrar">Login</a>
        </nav>
    </ContainerHeader>
  )
}

export default HeaderComponent
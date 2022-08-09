import React from 'react'
import { ContainerHeader } from './HeaderStyle'
import LogoListto from '../../assets/logo-listto.png'

const HeaderComponent = () => {
  return (
    <ContainerHeader>
        <img src={LogoListto}/>
        <nav>
            <a href="/">Inicío</a>
            <a href="/informacoes">Informações</a>
            <a href="/registrar">Registrar</a>
            <a href="/entrar">Entrar</a>
        </nav>
    </ContainerHeader>
  )
}

export default HeaderComponent
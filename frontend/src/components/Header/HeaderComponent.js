import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerHeader } from './HeaderStyle'
import LogoListto from '../../assets/logo-listto.png'

const HeaderComponent = () => {
  return (
    <ContainerHeader>
        <img src={LogoListto}/>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/features"}>Features</Link>
            <Link to={"/support"}>Support</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
    </ContainerHeader>
  )
}

export default HeaderComponent
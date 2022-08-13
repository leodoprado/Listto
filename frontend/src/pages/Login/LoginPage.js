import React from 'react'

import Header from '../../components/Header/HeaderComponent'
import Footer from '../../components/Footer/FooterComponent'

import { ContainerLoginPage, ContainerConteudoLoginPage } from './LoginPageStyle'

const LoginPage = () => {
  return (
    <>
        <Header />
          <ContainerLoginPage>
            <ContainerConteudoLoginPage>
              <h1>Sign in to Listto</h1>
              <label htmlFor="">Email address: </label>
              <input type="text" placeholder='Type your email'/>
              <label htmlFor="">Password: </label>
              <input type="password" placeholder='Type your password'/>
              <button>Sign in</button>
              <a href="/resetpassword">Forgot password?</a>
            </ContainerConteudoLoginPage>
          </ContainerLoginPage>
        <Footer />
    </>
  )
}

export default LoginPage
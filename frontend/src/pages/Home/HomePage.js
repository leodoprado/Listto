import React from 'react'

import Header from '../../components/Header/HeaderComponent'
import Footer from '../../components/Footer/FooterComponent'
import { ContainerHomePage, ContainerLeft, ContainerRight } from './HomePageStyle'
import imghomepage from '../../assets/imghomepage.png'

const HomePage = () => {
  return (
    <>
        <Header />
          <ContainerHomePage>
            <div className="container-conteudo">
              <ContainerLeft>
                <h1>Sistema para gestão de produtos</h1>
                <br />
                <h2>Voltado para pequenas empresas que buscam gerir de forma eficiente o preço dos produtos fornecidos, evitando planilhas ou blocos de anotações.</h2>
                </ContainerLeft>
              <ContainerRight>
                <img src={imghomepage}/>
              </ContainerRight>
            </div>
          </ContainerHomePage>
        <Footer />
    </>
  )
}

export default HomePage
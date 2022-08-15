import React from "react";

import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";

import { ContainerFeaturesPage, ContainerLeft, ContainerRight, ContainerConteudo } from "./FeaturesPageStyle";

import { AiOutlineRightCircle } from "react-icons/ai";

const FeaturesPage = () => {
  return (
    <>
        <Header />
          <ContainerFeaturesPage>
            <ContainerLeft>
              <h3> <AiOutlineRightCircle /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo? Necessitatibus culpa pariatur possimus nobis, unde adipisci suscipit, quasi, quo quaerat numquam doloribus sunt ratione dignissimos dolore laudantium eligendi tempora?</h3>
              <br />
              <h3> <AiOutlineRightCircle /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo? Necessitatibus culpa pariatur possimus nobis, unde adipisci suscipit, quasi, quo quaerat numquam doloribus sunt ratione dignissimos dolore laudantium eligendi tempora?</h3>
            </ContainerLeft>
            <ContainerRight>
              <h3> <AiOutlineRightCircle /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo? Necessitatibus culpa pariatur possimus nobis, unde adipisci suscipit, quasi, quo quaerat numquam doloribus sunt ratione dignissimos dolore laudantium eligendi tempora?</h3>
              <br />
              <h3> <AiOutlineRightCircle /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo? Necessitatibus culpa pariatur possimus nobis, unde adipisci suscipit, quasi, quo quaerat numquam doloribus sunt ratione dignissimos dolore laudantium eligendi tempora?</h3>
            </ContainerRight>
          </ContainerFeaturesPage>
        <Footer />
    </>
  )
}

export default FeaturesPage
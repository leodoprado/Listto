import React from 'react'
import LogoListto from '../../assets/logo-listto.png'
import { FiSearch } from 'react-icons/fi'

import { ContainerHeaderAdmin, ContainerInput, ContainerImage } from './HeaderAdminStyle'

const HeaderAdminComponent = () => {
  return (
    <ContainerHeaderAdmin>
        <img src={LogoListto}/>
        <ContainerInput>
            <input 
                type="text" 
                placeholder="Search for product"
            />
            <button>
                <FiSearch size={25} color='white' />
            </button>
      </ContainerInput>
      <nav>
        <a href="#">Add Category</a>
      </nav>
    </ContainerHeaderAdmin>
  )
}

export default HeaderAdminComponent
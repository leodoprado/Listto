import React from 'react'
import LogoListto from '../../assets/logo-listto.png'
import { FiSearch } from 'react-icons/fi'
import { MdAdd } from 'react-icons/md'

import { ContainerHeaderAdmin, ContainerInput, ContainerImage } from './HeaderAdminStyle'

const HeaderAdminComponent = () => {
  return (
    <ContainerHeaderAdmin>
        <h1>Welcome to Listto</h1>
        <ContainerInput>
            <input 
                type="text" 
                placeholder="Enter category name"
            />

      </ContainerInput>
      <nav>
        <a href="#"><MdAdd />Add Category</a>
      </nav>
    </ContainerHeaderAdmin>
  )
}

export default HeaderAdminComponent
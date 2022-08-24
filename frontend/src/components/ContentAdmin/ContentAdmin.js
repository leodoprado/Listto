import React from 'react'

import { MdAdd } from 'react-icons/md';

import { ContainerContentAdmin, MainContentAdmin } from './ContentAdminStyle'

const ContentAdmin = () => {
  return (
    <ContainerContentAdmin>
        <MainContentAdmin>
            <section>
                <details>
                    <summary>Conveniencia <a href="#">Add Item <MdAdd /></a></summary>
                    <p>sla</p>
                </details>
            </section>
        </MainContentAdmin>
    </ContainerContentAdmin>
  )
}

export default ContentAdmin
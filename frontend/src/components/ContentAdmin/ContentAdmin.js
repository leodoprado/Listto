import React from 'react'

import { MdAdd } from 'react-icons/md';

import { ContainerContentAdmin, MainContentAdmin } from './ContentAdminStyle'

const ContentAdmin = () => {
  return (
    <ContainerContentAdmin>
        <MainContentAdmin>
            <section>
                <details>
                    <summary> Conveniência <a href="#">Add Item <MdAdd /></a></summary>
                    <table>
                      <tr>
                        <th>Produto</th>
                        <th>Valor</th>
                      </tr>
                      <tr>
                        <td>sla 1</td>
                        <td>sla 2</td>
                      </tr>
                    </table>
                </details>
            </section>
        </MainContentAdmin>
    </ContainerContentAdmin>
  )
}

export default ContentAdmin
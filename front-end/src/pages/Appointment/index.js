import React from 'react'
import { Main, Form, Title, DivFlex, Input, Select } from './styles'
import Navbar from '../../components/Navbar'
import maskPhone from '../../utils/maskPhone'

const values = ['a', 'b', 'c', 'd', 'e']

const appointment = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Title>agendamento</Title>
        <Form>
          <DivFlex>
            <label htmlFor="name">Nome
              <Input type="text" id="name" />
            </label>

            <label htmlFor="lastName">Sobrenome
              <Input type="text" id="lastName" />
            </label>
          </DivFlex>

          <label htmlFor="phone">Telefone
            <Input type="tel" id="phone" onKeyDown={ maskPhone }
              placeholder="(31)99999-9999" />
          </label>

          <label htmlFor="email">E-mail
            <Input type="email" id="email"
              placeholder="exemplo@email.com" />
          </label>

          <DivFlex>
            <label htmlFor="date">Date
              <Input type="date" name="date" id="date" />
            </label>

            <label htmlFor="appt"> Que horas?
              <Select>
                { values.map((value, i) =>
                  <option key={ i }>{ value }</option>
                ) }
              </Select>
            </label>
          </DivFlex>

          <input type="submit" value="Agendar" />
        </Form>
      </Main>
    </>
  )
}

export default appointment

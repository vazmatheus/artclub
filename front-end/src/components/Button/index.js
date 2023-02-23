import React from 'react'
import { ButtonComponent } from './styles'


const Button = (props) => {
  return (
    <>
      <ButtonComponent>
        { props.text }
      </ButtonComponent>
    </>
  )
}

export default Button

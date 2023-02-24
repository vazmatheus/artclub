import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import Loading from '../../Layout/Loading'
import { GlobalStyles } from '../../styles/globalStyles'
import { Title, Paragraph, Button } from '../../styles/styles'
import { Logo, Main } from './style'

export const Home = () => {
  const history = useHistory();
  const [removeLoading, setRemoveLoading] = useState(false)

  const handleClick = () => {
    setRemoveLoading(true)
    setTimeout(() => {
      setRemoveLoading(false)
      history.push('/appointment')
    }, 1000);
  }

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main>
        <Logo>
          <img src="/img/logo.png" alt="logo ArtClub" />
        </Logo>

        <Title>Art Club</Title>
        <Paragraph>
          Nosssa especialide é cuidar de você.
        </Paragraph>

        <Button
          onClick={ () => handleClick() }
        >Agendar agora</Button>

        { removeLoading && <Loading /> }
      </Main>
    </>
  )
}

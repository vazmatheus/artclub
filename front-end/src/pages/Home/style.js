import styled from 'styled-components';
import pixelToRem from '../../utils/pxToRem';


export const Logo = styled.div`
  /* height: 400px; */
  /* width: 400px; */
  /* display: flex; */
  justify-content: center;

  img {
    width: ${pixelToRem(250)};
  }
`

export const Main = styled.main`
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  text-align: center;

  padding: 20px 0;
`



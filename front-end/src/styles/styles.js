import styled from 'styled-components';

const pixelToRem = (...values) => {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), "")
    .trim();
}

export const Title = styled.h1`
  font-size: ${pixelToRem(64)};
  font-weight: 300;
`

export const Paragraph = styled.p`
  /* color: var(--space); */
  font-size: ${pixelToRem(28)};
`

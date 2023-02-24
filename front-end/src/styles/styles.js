import styled from 'styled-components';

const pixelToRem = (...values) => {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), "")
    .trim();
}

export const Title = styled.h1`
  font-size: ${pixelToRem(64)};
  font-weight: 400;
`

export const Paragraph = styled.p`
  /* color: var(--space); */
  font-size: ${pixelToRem(32)};
  font-weight: 300;

`

export const Button = styled.button`
  background-color: var(--button);
  color: var(--textWith);
  width: ${pixelToRem(264)};
  height: ${pixelToRem(62)};
  border: none;
  border-radius: ${pixelToRem(6)};
  font-size: ${pixelToRem(32)}
`

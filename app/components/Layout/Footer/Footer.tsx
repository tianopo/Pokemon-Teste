import styled from 'styled-components'
import { colorsX } from '../../../../styles/Cores'

export const Footer = (): any => {
  const StyledFooter: any = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 72px;
    background: ${colorsX.secundary}
  `
  const P: any = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${colorsX.white}
  `
  return (
    <StyledFooter>
      <P>Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.</P>
    </StyledFooter>
  )
}
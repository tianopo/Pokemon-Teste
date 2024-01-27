import styled from "styled-components"
import { colorsX } from "../../styles/Cores"
import { FlexColumn, FlexRow } from "../../styles/Flex"

export const ContainerRotas = (): any => {
  const StyledFlexColumn: any = styled(FlexColumn)`
    background: ${colorsX.primary};
    gap: 12px;
    height: 187px;
    justify-content: center;
    padding-left: 6px;
    flex-shrink: 0;
  `
  const StyledFlexRow: any = styled(FlexRow)`
    gap: 4px;
  `

  const P12: any = styled.p`
    color: ${colorsX.white};
    font-size: 12px;
    font-weight: 700;
    margin: 0;
  `

  const P12300: any = styled(P12)`
    font-weight: 300;
  `

  const P32: any = styled(P12)`
    font-size: 32px;
  `

  const P14: any = styled(P12)`
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  `

  return (
    <StyledFlexColumn>
      <StyledFlexRow>
        <P12>Home</P12>
        <P12300>{">"}</P12300>
        <P12>Quem Somos</P12>
      </StyledFlexRow>
      <P32>Quem Somos</P32>
      <P14>A maior rede de tratamento pokémon.</P14>
    </StyledFlexColumn>
  )
}
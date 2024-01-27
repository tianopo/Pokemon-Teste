import styled from "styled-components"
import { colorsX } from "./Cores"
import { FlexRow } from "./Flex"

export const StyledFooter: any = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 72px;
    background: ${colorsX.secundary}
  `
export const P: any = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${colorsX.white}
  `

export const StyledLogo: any = styled.div`
  background: ${colorsX.primary};
  display: flex;
  align-items: center;
  justify-content: space-around; 
  width: 259px;
  height: 61px;
  border-radius: 50px;
  cursor: pointer;
  `

export const StyledImage: any = styled.img`
  width: 37px;
  height: 34px;
  `

export const StyledWrite: any = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: ${colorsX.white};
    font-style: normal;
    line-height: normal;
  `

export const StyledFlexRow: any = styled(FlexRow)`
    align-items: center;
    gap: 30px;
  `
export const StyledButton: any = styled.button`
  background: ${colorsX.primary};
  display: flex;
  align-items: center;
  justify-content: space-around; 
  width: 172px;
  height: 42px;
  border-radius: 30px;
  border-width: 0;
  cursor: pointer;
  
  color: ${colorsX.white};
  font-weight: 700;
  font-size: 14px;
  `
export const StyledWriteNav: any = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${colorsX.write};
    font-style: normal;
    line-height: normal;
    cursor: pointer;
  `
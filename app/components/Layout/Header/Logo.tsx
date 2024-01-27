import styled from 'styled-components';
import { colorsX } from '../../../../styles/Cores';

export const Logo = (): any => {
  const StyledLogo: any = styled.div`
  background: ${colorsX.primary};
  display: flex;
  align-items: center;
  justify-content: space-around; 
  width: 259px;
  height: 61px;
  border-radius: 50px;
  `

  const StyledImage: any = styled.img`
  width: 37px;
  height: 34px;
  `

  const StyledWrite: any = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: ${colorsX.white};
    font-style: normal;
    line-height: normal;
  `

  return (
    <StyledLogo>
      <StyledImage src="/images/white-pokeball.svg" alt='pokebola' />
      <StyledWrite>Centro Pokémon</StyledWrite>
    </StyledLogo>
  );
}
import { StyledLogo, StyledImage, StyledWrite } from "../../../../styles/componentLayout";

export const Logo = (): any => {

  return (
    <StyledLogo>
      <StyledImage src="/images/white-pokeball.svg" alt='pokebola' />
      <StyledWrite>Centro Pokémon</StyledWrite>
    </StyledLogo>
  );
}
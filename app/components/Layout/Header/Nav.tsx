import styled from 'styled-components';
import { colorsX } from '../../../../styles/Cores';
import { FlexRow } from '../../../../styles/Flex';

export const Nav = (): any => {
  const StyledFlexRow: any = styled(FlexRow)`
    align-items: center;
    gap: 30px;
  `
  const StyledButton: any = styled.button`
  background: ${colorsX.primary};
  display: flex;
  align-items: center;
  justify-content: space-around; 
  width: 172px;
  height: 42px;
  border-radius: 30px;
  border-width: 0;
  
  color: ${colorsX.white};
  font-weight: 700;
  font-size: 14px;
  `
  const StyledWrite: any = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: ${colorsX.write};
    font-style: normal;
    line-height: normal;
  `

  return (
    <StyledFlexRow>
      <StyledWrite>Quem Somos</StyledWrite>
      <StyledButton>Agendar Consulta</StyledButton>
    </StyledFlexRow>
  );
}
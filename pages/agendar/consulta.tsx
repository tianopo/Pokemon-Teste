import styled from "styled-components";
import { ContainerFlexColumn, ContainerFlexRow, ContainerP12, ContainerP12300, ContainerP14, ContainerP32 } from "../../styles/ContainerRotas";
import { colorsX } from "../../styles/Cores";
import { FlexColumn } from "../../styles/Flex";


export default function Consulta() {
  const Div: any = styled(FlexColumn)`
    align-items: center;
    padding: 32px 0 567px;
  `

  const P24: any = styled.p`
    color: ${colorsX.write};
    font-size: 24px;
    font-weight: 600;
    margin-top: 0;
  `

  const Label: any = styled.label`
    
  `

  return (
    <>
      <ContainerFlexColumn>
        <ContainerFlexRow>
          <ContainerP12>Home</ContainerP12>
          <ContainerP12300>{">"}</ContainerP12300>
          <ContainerP12>Agendar Consulta</ContainerP12>
        </ContainerFlexRow>
        <ContainerP32>Agendar Consulta</ContainerP32>
        <ContainerP14>Recupere seus pokémons em 5 segundos</ContainerP14>
      </ContainerFlexColumn>
      <Div>
        <P24>Preencha o formulário abaixo para agendar sua consulta</P24>
      </Div>
    </>
  );
}

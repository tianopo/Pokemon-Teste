import styled from "styled-components"
import { colorsX } from "./Cores"
import { FlexColumn, FlexRow } from "./Flex"

export const Div: any = styled(FlexColumn)`
    align-items: center;
    padding: 32px 0 567px;
  `

export const P24: any = styled.p`
    color: ${colorsX.secundary};
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 43px;
  `

export const Form: any = styled.form`
    width: 548px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  `

export const FlexCol: any = styled(FlexColumn)`
    gap: 8px;
  `

export const FlexR: any = styled(FlexRow)`
    gap: 18px;
    align-items: center;
  `

export const Label: any = styled.label`
    font-size: 12px;
    font-weight: 700;
    color: ${colorsX.secundary}
  `

export const Input: any = styled.input`
    width: 249px;
    height: 43px;
    flex-shrink: 0;
    padding: 0 0 0 14px;
    border-radius: 8px;
    border: 1px solid ${colorsX.borda};

    &::placeholder {
      color: ${colorsX.terciary};
      font-size: 14px;
      font-weight: 500;
    }
  `

export const Select: any = styled.select`
    position: relative;
    width: 265px;
    height: 45px;
    flex-shrink: 0;
    padding: 0 0 0 14px;
    border-radius: 8px;
    border: 1px solid ${colorsX.borda};
    color: ${colorsX.terciary};
  `;

export const Option: any = styled.option`
    color: ${colorsX.terciary};
    font-size: 14px;
    font-weight: 500;
  `;

export const FlexTime: any = styled(FlexCol)`
    margin-top: 77px;
    gap: 32px;
  `

export const P12Black: any = styled.p`
    color: ${colorsX.secundary};
    font-size: 12px;
    font-weight: 700;
    margin: 0;
  `

export const P12Cinza: any = styled.p`
    color: ${colorsX.terciary};
    font-size: 12px;
    font-weight: 500;
    margin: 0;
  `

export const ButtonNewPokemon: any = styled.button`
    border-radius: 30px;
    width: 253px;
    height: 42px;
    display: flex;
    gap: 11px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colorsX.secundary};
    cursor: pointer;
  `

export const P16Mais: any = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: ${colorsX.secundary};
  `

export const Divider: any = styled.div`
    width: 548px;
    border-top: 1px solid ${colorsX.borda};
  `

export const FlexRowPaga: any = styled(FlexRow)`
    justify-content: space-between;
  `

export const P14Terciary: any = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${colorsX.terciary};
    margin: 0;
  `

export const P8: any = styled(P14Terciary)`
    font-size: 8px;
  `

export const ButtonPaga: any = styled.button`
    width: 183px;
    height: 42px;
    flex-shrink: 0;
    background: ${colorsX.primary};
    border-radius: 30px;
    border-width: 0;
    cursor: pointer;

    color: ${colorsX.white};
    font-size: 14px;
    font-weight: 700;
  `

export const MensagemDeErro: any = styled.span`
    font-size: 12px;
    color: red;
`

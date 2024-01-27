import styled from "styled-components"
import { colorsX } from "./Cores"
import { FlexColumn, FlexRow } from "./Flex"

export const ContainerFlexColumn: any = styled(FlexColumn)`
    background: ${colorsX.primary};
    gap: 12px;
    height: 187px;
    justify-content: center;
    padding-left: 6px;
    flex-shrink: 0;
  `

export const ContainerFlexRow: any = styled(FlexRow)`
    gap: 4px;
  `

export const ContainerP12: any = styled.p`
    color: ${colorsX.white};
    font-size: 12px;
    font-weight: 700;
    margin: 0;
    cursor: pointer;
  `

export const ContainerP12300: any = styled(ContainerP12)`
    font-weight: 300;
    cursor: auto;
  `

export const ContainerP32: any = styled(ContainerP12)`
    font-size: 32px;
    cursor: auto;
  `

export const ContainerP14: any = styled(ContainerP12)`
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    cursor: auto;
  `
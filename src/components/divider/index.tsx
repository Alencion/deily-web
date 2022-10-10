import { Theme } from '@/constants/themes'
import styled, { ThemeProps } from 'styled-components'

interface Props {
  width?: string
  height?: string
  color?: string
  className?: string
}

export function HorizonDivider (props: Props): JSX.Element {
  return <HorizonDividerStyledContainer {...props}/>
}

const HorizonDividerStyledContainer = styled.div<Props>`
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '1px'};
  border-radius: 999px;

  background-color: ${({ color, theme }: ThemeProps<Theme> & { color?: string }) => color ?? theme.colors.black.default};
`

export function VerticalDivider (props: Props): JSX.Element {
  return <VerticalDividerStyledContainer {...props}/>
}

const VerticalDividerStyledContainer = styled.div<Props>`
  width: ${(props) => props.width ?? '1px'};
  height: ${(props) => props.height ?? '100px'};
  border-radius: 999px;
  background-color: ${({ color, theme }: ThemeProps<Theme> & { color?: string }) => color ?? theme.colors.black.default};
`

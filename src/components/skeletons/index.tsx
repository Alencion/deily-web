import { Theme } from '@/constants/themes'
import styled, { ThemeProps } from 'styled-components'

interface Props {
  width?: string
  height?: string
  isRound?: boolean
}

export default function Skeleton (props: Props): JSX.Element {
  return <SkeletonStyledContainer {...props}></SkeletonStyledContainer>
}

const SkeletonStyledContainer = styled.div<Props>`
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '100%'};

  border-radius: 50%;
  ${(props) => props.isRound ? 'border-radius: 50%' : 'border-radius: 5px'};

  background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.backdrop};
`

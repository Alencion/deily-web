import { Theme } from '@/constants/themes'
import styled, { ThemeProps } from 'styled-components'

export default function Loading (): JSX.Element {
  return (
    <LoadingStyledContainer>
      <LoadingSpinner />
    </LoadingStyledContainer>
  )
}

const LoadingStyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const LoadingSpinner = styled.div`
  position: relative;

  width: 25px;
  height: 25px;
  border: 4px solid ${({ theme }: ThemeProps<Theme>) => theme.colors.border.dark};
  border-radius: 50%;
  animation: spinner 1.0s linear infinite;

  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    
    width: 100%;
    height: 100%;
    

    background-color: #fff;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg) scale(1.12);  
    }
    50% {
      transform: rotate(180deg) scale(1);
    }
    100% {
      transform: rotate(360deg) scale(1.12);
    }
  }
`

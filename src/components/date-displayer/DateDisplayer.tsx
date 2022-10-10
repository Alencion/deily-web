import moment from 'moment'
import 'moment/locale/ko'
import styled, { ThemeProps } from 'styled-components'

import { Theme } from '@constants/themes'

interface Props {
  date: string
  className?: string
}

export default function DateDisplayer ({ date, className }: Props): JSX.Element {
  return <DateDisplayerStyledContainer className={className}>{moment(date).locale('ko').format('LL (ddd)')}</DateDisplayerStyledContainer>
}

const DateDisplayerStyledContainer = styled.div`
  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.medium, color: theme.colors.black.default, weight: '700' })}
`

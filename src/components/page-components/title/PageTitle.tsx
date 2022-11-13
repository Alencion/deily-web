import { useContext } from 'react'
import styled, { ThemeProps } from 'styled-components'

import { Theme } from '@constants/themes'
import { PageContext } from '@providers/PageProvider'
import ContentEditable from '@/components/content-editable'

interface Props {
  isOwner: boolean
  createInitBlock: () => void
}

export default function PageTitle ({ isOwner, createInitBlock }: Props): JSX.Element {
  const { pageState, pageDispatcher, pageActionBuilder } = useContext(PageContext)

  const changeTitleState = (title: string): void => {
    pageDispatcher && pageActionBuilder && pageDispatcher(pageActionBuilder.changeTitle(title ?? ''))
  }

  const keyDown: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.nativeEvent.isComposing) return
    if (e.key === 'Enter') createInitBlock()
  }

  return (
    <TitleStyledTitle divProps={{ onKeyDown: keyDown }} isEditable={!!isOwner} value={isOwner ? pageState.selectPage?.title ?? '' : pageState.selectPage?.title ?? '제목없음'} onChange={changeTitleState} placeholder={'제목 없음'}/>
  )
}

const TitleStyledTitle = styled(ContentEditable)`
  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.title, color: theme.colors.black.default, weight: '700' })}
`

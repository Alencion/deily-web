import React, { useLayoutEffect, useRef, useState } from 'react'
import styled, { ThemeProps } from 'styled-components'

import ContentEditable from '@components/content-editable'
import { Theme } from '@constants/themes'
import { BlockModel } from '@models/Page'

interface Props {
  isOwner: boolean
  block: BlockModel
  focusBlockId: string | undefined
  setFocusBlockId: React.Dispatch<React.SetStateAction<string | undefined>>
  createNewBlock: (id: string) => void
  changeContent: (id: string, content: string) => void
  deleteBlock: (id: string) => void
  focusPrevBlock: (id: string) => void
  focusNextBlock: (id: string) => void
}

export default function PageBlock ({ isOwner, block, setFocusBlockId, focusBlockId, createNewBlock, changeContent, focusPrevBlock, focusNextBlock, deleteBlock }: Props): JSX.Element {
  const blockRef = useRef<HTMLInputElement>(null)
  const [placeholder, setPlaceHolder] = useState<string>('')

  const chageBlockContent = (value: string): void => {
    changeContent(block.id, value)
  }

  const keyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.nativeEvent.isComposing) return

    if (e.key === 'Enter') {
      if (e.shiftKey) {
        changeContent(block.id, block.content + '\n')
      } else {
        e.preventDefault()
        createNewBlock(block.id)
      }
    } else if (e.key === 'ArrowUp' || (e.key === 'ArrowLeft' && e.currentTarget.selectionStart === 0 && e.currentTarget.selectionEnd === 0)) {
      e.preventDefault()
      focusPrevBlock(block.id)
      console.log(e)
    } else if (e.key === 'ArrowDown' || (e.key === 'ArrowRight' && e.currentTarget.selectionStart === block.content?.length && e.currentTarget.selectionEnd === block.content?.length)) {
      e.preventDefault()
      focusNextBlock(block.id)
    } else if (e.key === 'Backspace' && block.content.length === 0) {
      e.preventDefault()
      deleteBlock(block.id)
    }
  }

  const onClickBlock: React.MouseEventHandler<HTMLDivElement> = (e): void => {
    e.stopPropagation()
    setFocusBlockId(block.id)
  }

  const onFocusBlock: React.FocusEventHandler<HTMLInputElement> = (e): void => {
    setPlaceHolder('명령어 사용시 " / "를 입력하세요.')
  }

  const onBlurBlock: React.FocusEventHandler<HTMLInputElement> = (e): void => {
    setPlaceHolder('')
    setFocusBlockId(undefined)
  }

  useLayoutEffect(() => {
    if (focusBlockId === block.id) {
      blockRef.current?.focus()
    }
  }, [focusBlockId])

  return (
    <PageBlockStyledInput divProps={{ onClick: onClickBlock, onFocus: onFocusBlock, onBlur: onBlurBlock, onKeyDown: keyDownHandler }}
                          ref={blockRef}
                          isEditable={!!isOwner}
                          className={block.type ?? 'paragraph'}
                          value={block.content ?? ''}
                          placeholder={placeholder}
                          onChange={chageBlockContent}/>
  )
}

const PageBlockStyledInput = styled(ContentEditable)`
  &.paragraph {
    padding: 6px 4px;
    margin: 4px 0;

    ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.paragraph, color: theme.colors.black.default })}
    line-height: 26px;
  }
`

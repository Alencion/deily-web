import React, { forwardRef, useRef } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  divProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  isEditable: boolean
  className?: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

const ContentEditable = forwardRef<HTMLDivElement, Props>(({ divProps, className, isEditable = true, value, onChange, placeholder }, ref) => {
  const valueRef = useRef<string>(value)
  return (
    <ContentEditableStyledContainer
      {...divProps}
      ref={ref}
      className={className}
      contentEditable={isEditable}
      suppressContentEditableWarning={isEditable}
      value={value}
      placeholder={placeholder}
      onInput={(e) => onChange(e.currentTarget.textContent ?? '')}>
        {valueRef.current}
      </ContentEditableStyledContainer>
  )
})
ContentEditable.displayName = 'ContentEditable'

export default ContentEditable

const ContentEditableStyledContainer = styled.div<{ value: string }>`

  &:hover {
    cursor: text;
  }

  &:focus {
    outline: none;
  }

  ${({ value, placeholder }) => value.length === 0 && placeholder && css`
      &:before {
        content: attr(placeholder);
        color: gray;
      }
    `
  }
`

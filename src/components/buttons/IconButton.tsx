import { ReactNode } from 'react'

interface IconButtonProps {
  buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  iconProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  className?: string
}

export const IconButton = ({ buttonProps, iconProps, className }: IconButtonProps): JSX.Element => {
  return (
    <button className={className} {...buttonProps}>
      <img {...iconProps} />
    </button>
  )
}

interface IconTextButtonProps {
  buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  iconProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  textProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
  children?: ReactNode
  className?: string
}

export const IconTextButton = ({ buttonProps, iconProps, textProps, children, className }: IconTextButtonProps): JSX.Element => {
  return (
    <button className={className} {...buttonProps}>
      <img {...iconProps} />
      <p {...textProps}>{children}</p>
    </button>
  )
}

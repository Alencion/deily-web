import { ReactNode } from 'react'

interface IconTextProps {
  iconProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  textProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
  children?: ReactNode
  className?: string
}

export const IconText = ({ iconProps, textProps, children, className }: IconTextProps): JSX.Element => {
  return (
    <div className={className}>
      <img {...iconProps}/>
      <p {...textProps}>{children}</p>
    </div>
  )
}

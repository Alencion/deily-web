import ThemeProvider from '@providers/ThemeProvider'
import PageProvider from '@providers/PageProvider'

interface Props {
  children?: React.ReactNode
}

export default function RootProvider ({ children }: Props): JSX.Element {
  return (
    <ThemeProvider>
        <PageProvider>
          {children}
        </PageProvider>
    </ThemeProvider>
  )
}

import { createContext, ReactNode, useReducer } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { Theme } from '@constants/themes'
import { PrimaryTheme } from '@constants/themes/PrimaryTheme'

interface ThemeAction {
  type: string
}

const reducer = (_: Theme, action: ThemeAction): Theme => {
  switch (action.type) {
    case 'primary':
      return PrimaryTheme
    default:
      return PrimaryTheme
  }
}

interface ThemeContextType {
  theme: Theme
  themeDispatch?: React.Dispatch<any>
}

export const ThemeContext = createContext<ThemeContextType>({ theme: PrimaryTheme })

interface Props {
  children?: ReactNode
}

export default function ThemeProvider ({ children }: Props): JSX.Element {
  const [theme, themeDispatch] = useReducer<(state: Theme, action: ThemeAction) => Theme>(reducer, PrimaryTheme)

  return (
    <ThemeContext.Provider value={{ theme, themeDispatch }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

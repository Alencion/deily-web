import { createTheme, Theme, PrimaryColor, SecondaryColor } from '.'

const primaryColor: PrimaryColor = {
  background: '#DFF1FF',
  backgroundHover: '#CCE9FF',
  light: '#77AAD2',
  default: '#7C8CBB',
  dark: '#505A7D'
}

const secondary: SecondaryColor = {
  default: '#FF4185'
}

export const PrimaryTheme: Theme = createTheme(primaryColor, secondary)

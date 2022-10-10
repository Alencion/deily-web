export interface Theme {
  colors: Color
  fontSizes: FontSize
  fontFamilies: FontFamily
  font: ({ size, family, style, weight, color }: FontProps) => string
}

export function createTheme (primary: PrimaryColor): Theme {
  return {
    colors: {
      ...defaultColor,
      primary
    },
    fontSizes: defaultFontSize,
    fontFamilies: defaultFontFamily,
    font: fontBuilder
  }
}

const fontBuilder = ({ size, family = '\'NanumGothic\', \'Jua\'', style = 'normal', weight = '400', color = defaultColor.black.light }: FontProps): string => {
  return `
    color: ${color};
    font-family: ${family};
    font-style: ${style};
    font-weight: ${weight};
    font-size: ${size};
  `
}

interface FontProps {
  size: string
  style?: string
  family?: string
  weight?: string
  color?: string
}

interface FontSize {
  title: '40px'
  header1: '36px'
  header2: '30px'
  header3: '24px'
  paragraph: '20px'
  medium: '16px'
  small: '14px'
  xsmall: '12px'
  xxsmall: '10px'
}

const defaultFontSize: FontSize = {
  title: '40px',
  header1: '36px',
  header2: '30px',
  header3: '24px',
  paragraph: '20px',
  medium: '16px',
  small: '14px',
  xsmall: '12px',
  xxsmall: '10px'
}

interface FontFamily {
  Jua: '\'Jua\''
  NanumGothic: '\'Nanum Gothic\''
  Itim: '\'Itim\''
}

const defaultFontFamily: FontFamily = {
  Jua: '\'Jua\'',
  NanumGothic: '\'Nanum Gothic\'',
  Itim: '\'Itim\''
}

interface Color {
  primary: PrimaryColor
  white: string
  grey: string
  red: {
    default: string
    dark: string
  }
  background: {
    overlay: string
    light: string
    default: string
  }
  border: {
    light: string
    default: string
    dark: string
  }
  black: {
    light: string
    default: string
  }
  github: string
  backdrop: string
}

export interface PrimaryColor {
  background: string
  backgroundHover: string
  light: string
  default: string
  dark: string
}

const defaultColor = {
  white: '#FFFFFF',
  grey: '#848889',
  red: {
    default: '#F91111',
    dark: '#AF6A65'
  },
  background: {
    overlay: 'rgba(0, 0, 0, 0.04)',
    light: '#FBFBFB',
    default: '#EDEDED'
  },
  border: {
    light: '#F5F5F5',
    default: '#DDDDDD',
    dark: '#ADADAD'
  },
  black: {
    light: '#60686C',
    default: '#1C1D21'
  },
  github: '#222528',
  backdrop: 'rgba(79, 79, 79, 0.3)'
}

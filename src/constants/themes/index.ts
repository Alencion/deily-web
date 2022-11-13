export interface Theme {
  colors: Color
  fontSizes: FontSize
  fontFamilies: FontFamily
  font: ({ size, family, style, weight, color, lineHeight }: FontProps) => string
}

export function createTheme (primary: PrimaryColor, secondary: SecondaryColor): Theme {
  return {
    colors: {
      ...defaultColor,
      primary,
      secondary
    },
    fontSizes: defaultFontSize,
    fontFamilies: defaultFontFamily,
    font: fontBuilder
  }
}

const fontBuilder = ({ size, family = '\'Gowun Dodum\', \'NanumGothic\'', style = 'normal', weight = '400', color = defaultColor.black.light, lineHeight = size }: FontProps): string => {
  return `
    color: ${color};
    font-family: ${family};
    font-style: ${style};
    font-weight: ${weight};
    font-size: ${size};
    ligth-height: ${lineHeight};
  `
}

interface FontProps {
  size: string
  style?: string
  family?: string
  weight?: string
  color?: string
  lineHeight?: string
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
  GowunDodum: '\'Gowun Dodum\''
  NanumGothic: '\'Nanum Gothic\''
  Itim: '\'Itim\''
}

const defaultFontFamily: FontFamily = {
  GowunDodum: '\'Gowun Dodum\'',
  NanumGothic: '\'Nanum Gothic\'',
  Itim: '\'Itim\''
}

interface Color {
  primary: PrimaryColor
  secondary: SecondaryColor
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

export interface SecondaryColor {
  default: string
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

import { ButtonHeight, ButtonVC } from './enums'

const gradients = {
  0: 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56',
}

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  red: '#EA0029',
  gray: '#BEC5CC',
}

const button = {
  border: {
    [ButtonVC.primary]: 'none',
    [ButtonVC.secondary]: `1px solid ${colors.white}`,
  },
  hoveredColor: {
    [ButtonVC.primary]: gradients[0],
    [ButtonVC.secondary]: colors.white,
  },
  hoveredTextColor: {
    [ButtonVC.primary]: colors.white,
    [ButtonVC.secondary]: colors.black,
  },
  height: {
    [ButtonHeight.small]: '40px',
    [ButtonHeight.tall]: '56px',
  },
  fontSize: {
    [ButtonHeight.small]: '12px',
    [ButtonHeight.tall]: '16px',
  },
}

export const theme = {
  gradients,
  colors,
  button,
}

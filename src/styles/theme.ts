const zIndexes = {
  header: 100,
  carouselModal: 90,
}

const colors = {
  whiteSmoke: '#f2f2f2',
  platinum: '#e5e5e5',
  gray: 'rgba(28, 28, 28, 0.71)',
  red: 'red',
  egg: '#F7F7F7',
}

const sizes = {
  small: 320,
  maxSmall: 464,
  medium: 720,
  large1024: 1024,
  large1200: 1200,
  large1400: 1400,
  large1600: 1600,
  large1700: 1700,
  large2000: 2000,
  large2200: 2200,
}

const minMediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`

const maxMediaQuery = (maxWidth: number) => `@media (max-width: ${maxWidth}px)`

const media = {
  custom: minMediaQuery,
  phoneAndDown: maxMediaQuery(sizes.small - 1),
  phone: minMediaQuery(sizes.small),
  maxPhone: minMediaQuery(sizes.maxSmall),
  tablet: minMediaQuery(sizes.medium),
  tabletAndDown: maxMediaQuery(sizes.medium - 1),
  lessThanDesktop: maxMediaQuery(sizes.large1024 - 1),
  desktop1024: minMediaQuery(sizes.large1024),
  desktop1200: minMediaQuery(sizes.large1200),
  desktop1400: minMediaQuery(sizes.large1400),
  desktop1600: minMediaQuery(sizes.large1600),
  desktop1700: minMediaQuery(sizes.large1700),
  desktop2000: minMediaQuery(sizes.large2000),
  desktop2200: minMediaQuery(sizes.large2200),
}

const theme = {
  sizes: {
    ...sizes,
  },
  media: {
    ...media,
  },
  zIndexes: {
    ...zIndexes,
  },
  colors: {
    ...colors,
  },
}

export default theme

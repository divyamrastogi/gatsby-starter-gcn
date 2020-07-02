const primary = [
  '#006961',
  '#007D75',
  '#078F86',
  '#109F96',
  '#1BADA3',
  '#37BAB1',
  '#54C6BF',
  '#72D2CC',
  '#90DDD8',
  '#AFE8E4',
  '#CFF2EF',
]

const secondary = [
  '#52770C',
  '#658F15',
  '#77A520',
  '#88B92D',
  '#99CA3C',
  '#A7D354',
  '#B5DC6D',
  '#C3E486',
  '#D1EBA0',
  '#DEF1BA',
  '#ECF7D5',
]

export default {
  colors: {
    background: '#ffffff',
    text: '#4A4A4A',
    border: '#e9e9e9',
    tertiary: '#f3f3f3',
    highlight: '#5b8bf7',
    primary,
    secondary,
  },
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  spacing: function(n) {
    return `${n * 0.5}rem`
  },
}

export const numberWithSpaces = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const shuffle = (array: Array<any>) =>
  [...array].sort(() => Math.random() - 0.5)

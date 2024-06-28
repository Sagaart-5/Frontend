export const POPUP_DATA = {
  titleOne: 'Узнайте стоимость ',
  titleTwo: 'Арт-объекта',
  subtitleArt: 'Немного расскажите об Арт-объекте',
  subtitleUpload: 'Загрузите фото',
  subtitleRegistration:
    'Создайте аккаунт, чтобы мы могли поделиться с Вами результатом оценки',
  upload: 'Загрузить фото',
  step: 'Шаг',
  next: 'Далее',
  open: 'Оценить',
}

const FILTER_DATA = {
   price: {
    priceOne: 'до 20 000 ₽',
    priceTwo: 'до 20 000 - 50 000 ₽',
    priceThree: 'до 50 000 - 100 000 ₽',
    priceFour: 'до 100 000 - 200 000 ₽',
    priceFive: 'до 200 000 - 500 000 ₽',
  },
  category: {
    picture: 'Живопись',
    grafica: 'Графика',
    photo: 'Фотография',
    dijital: 'Digital',
  },
  orientation: {
    gorizontal: 'Горизонтальная',
    vertical: 'Вертикальная',
  },
  style: {
    abstraction: 'Абстракция',
    minimalizm: 'Минимализм',
    expressionizm: 'Экспрессионизм',
    concept: 'Концептуальное искусство',
    figurate: 'Фигуративное искусство',
    interier: 'Интерьерное искусство',
    pop: 'Pop Art',
    street: 'Street Art',
    architectura: 'Архитектура',
  },
  color: {
    light: 'Светлые оттенки',
    dark: 'Темные оттенки',
    warm: 'Теплая цветовая гамма',
    cold: 'Холодная цветовая гамма',
    brigth: 'Яркие оттенки',
    pale: 'Бледные оттенки',
    black: 'Ч/б',
  },
};

export const checkboxPrices = [
  { label: FILTER_DATA.price.priceOne, name: 'priceOne' },
  { label: FILTER_DATA.price.priceTwo, name: 'priceTwo' },
  { label: FILTER_DATA.price.priceThree, name: 'priceThree' },
  { label: FILTER_DATA.price.priceFour, name: 'priceFour' },
  { label: FILTER_DATA.price.priceFive, name: 'priceFive' },
] as { label: string; name: string }[]

export const checkboxCategory = [
  { label: FILTER_DATA.category.picture, name: 'picture' },
  { label: FILTER_DATA.category.grafica, name: 'grafica' },
  { label: FILTER_DATA.category.photo, name: 'photo' },
  { label: FILTER_DATA.category.dijital, name: 'dijital' },
] as { label: string; name: string }[]

export const checkboxOrientation = [
  { label: FILTER_DATA.orientation.gorizontal, name: 'gorizontal' },
  { label: FILTER_DATA.orientation.vertical, name: 'vertical' },
] as { label: string; name: string }[]

export const checkboxStyle = [
  { label: FILTER_DATA.style.abstraction, name: 'abstraction' },
  { label: FILTER_DATA.style.minimalizm, name: 'minimalizm' },
  { label: FILTER_DATA.style.expressionizm, name: 'expressionizm' },
  { label: FILTER_DATA.style.concept, name: 'concept' },
  { label: FILTER_DATA.style.figurate, name: 'figurate' },
  { label: FILTER_DATA.style.interier, name: 'interier' },
  { label: FILTER_DATA.style.pop, name: 'pop' },
  { label: FILTER_DATA.style.street, name: 'street' },
  { label: FILTER_DATA.style.architectura, name: 'architectura' },
] as { label: string; name: string }[]

export const checkboxColor = [
  { label: FILTER_DATA.color.light, name: 'light' },
  { label: FILTER_DATA.color.dark, name: 'dark' },
  { label: FILTER_DATA.color.warm, name: 'warm' },
  { label: FILTER_DATA.color.cold, name: 'cold' },
  { label: FILTER_DATA.color.brigth, name: 'brigth' },
  { label: FILTER_DATA.color.pale, name: 'pale' },
  { label: FILTER_DATA.color.black, name: 'black' },
] as { label: string; name: string }[]

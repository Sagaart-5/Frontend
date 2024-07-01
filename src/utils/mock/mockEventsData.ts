import { EventType } from 'src/utils/types'
import eventImage from 'src/assets/images/mock/events/event1.jpg'

export const mockEventsData: Array<EventType> = [
  {
    id: 1,
    title: 'Лекция «Город чудный, город древний...»: Москва в картинах Аполлинария Васнецова и других художников',
    image: eventImage,
    date: '29 июня 2024 12:00',
    link: 'https://www.tretyakovgallery.ru/events/o/lektsiya-gorod-chudnyy-gorod-drevniy-moskva-v-kartinakh-apollinariya-vasnetsova-i-drugikh-khudozhnik/'
  },
  {
    id: 2,
    title: 'Арма, Artplay и Винзавод: арт-кластеры Москвы',
    image: 'src/assets/images/mock/events/event2.jpg',
    date: 'Проводится регулярно',
    link: 'https://experience.tripster.ru/experience/31186/'
  },
  {
    id: 3,
    title: 'Найти Бэнкси',
    image: 'src/assets/images/mock/events/event3.jpg',
    date: 'до 1 сентября',
    link: 'https://banksy.ru/'
  },
  {
    id: 4,
    title: 'Квадрат и пространство. От Малевича до ГЭС-2',
    image: 'src/assets/images/mock/events/event4.jpg',
    date: 'до 27 октября',
    link: 'https://ges-2.org/projects/square-and-space-from-malevich-to-ges-2'
  },
  {
    id: 5,
    title: 'Эрик Булатов: Живу дальше. Лаборатория художника',
    image: 'src/assets/images/mock/events/event5.jpg',
    date: 'до 15 июля',
    link: 'https://www.afisha.ru/exhibition/erik-bulatov-zhivu-dalshe-laboratoriya-hudozhnika-290838/'
  },
  {
    id: 6,
    title: 'Law and Love',
    image: 'src/assets/images/mock/events/event6.jpg',
    date: 'до 4 августа',
    link: 'https://cube.moscow/law-love-postrigay/'
  },
  {
    id: 7,
    title: 'Deep Inside/GHT',
    image: 'src/assets/images/mock/events/event7.jpg',
    date: 'до 30 июня',
    link: 'https://staytrueguys.com/'
  },
  {
    id: 8,
    title: 'Даша Мальцева. Жизнь в розовом цвете (La Vie en Rose)',
    image: 'src/assets/images/mock/events/event8.jpg',
    date: 'до 4 июля',
    link: 'https://sistema.gallery/exposition/dasha-malceva-zhizn-v-rozovom-cvete-la-vie-en-rose/'
  },
]

import { EventType } from 'src/utils/types'
import { Event1, Event2, Event3, Event4, Event5, Event6, Event7, Event8 } from 'src/utils/mock/imports'

export const mockEventsData: Array<EventType> = [
  {
    id: 1,
    title: 'Лекция «Город чудный, город древний...»: Москва в картинах Аполлинария Васнецова и других художников',
    image: Event1,
    date: '29 июня 2024 12:00',
    link: 'https://www.tretyakovgallery.ru/events/o/lektsiya-gorod-chudnyy-gorod-drevniy-moskva-v-kartinakh-apollinariya-vasnetsova-i-drugikh-khudozhnik/'
  },
  {
    id: 2,
    title: 'Арма, Artplay и Винзавод: арт-кластеры Москвы',
    image: Event2,
    date: 'Проводится регулярно',
    link: 'https://experience.tripster.ru/experience/31186/'
  },
  {
    id: 3,
    title: 'Найти Бэнкси',
    image: Event3,
    date: 'до 1 сентября',
    link: 'https://banksy.ru/'
  },
  {
    id: 4,
    title: 'Квадрат и пространство. От Малевича до ГЭС-2',
    image: Event4,
    date: 'до 27 октября',
    link: 'https://ges-2.org/projects/square-and-space-from-malevich-to-ges-2'
  },
  {
    id: 5,
    title: 'Эрик Булатов: Живу дальше. Лаборатория художника',
    image: Event5,
    date: 'до 15 июля',
    link: 'https://www.afisha.ru/exhibition/erik-bulatov-zhivu-dalshe-laboratoriya-hudozhnika-290838/'
  },
  {
    id: 6,
    title: 'Law and Love',
    image: Event6,
    date: 'до 4 августа',
    link: 'https://cube.moscow/law-love-postrigay/'
  },
  {
    id: 7,
    title: 'Deep Inside/GHT',
    image: Event7,
    date: 'до 30 июня',
    link: 'https://staytrueguys.com/'
  },
  {
    id: 8,
    title: 'Даша Мальцева. Жизнь в розовом цвете (La Vie en Rose)',
    image: Event8,
    date: 'до 4 июля',
    link: 'https://sistema.gallery/exposition/dasha-malceva-zhizn-v-rozovom-cvete-la-vie-en-rose/'
  },
]


import { AmeliaCastillo, AnnabelleSmith, EmileLegrand, LinaRamirez, MiguelRivera, SamanthaHall,} from './imports'
import { Crowd, Eye, Jellyfish, Music, Shine, Smile, Space, Uturn } from './imports'
import { EasyConversation, Fatigue, MountainsAndRiver, Road } from './imports'
import { Dance, Farmer, LastSupper, Palette, Robbers, Scientist } from './imports'
import { DateWithArt, Artist, ConceptualismInPhilosophy, GlamorInTheatricalScenery, LemonEaters } from './imports'
import { CubismStillLife, Cubism, Ontario } from './imports'
import { ClassicsInInterior, CozyCorner, Curtains, Old, Paintings, SpaceLightAndSilence, VanguardInInterior, Walls, WorkExamples } from './imports'
import { Glory, Kiss, Mustache, Portrait, Vasilisa, Woman, Zebra } from './imports'
import { NewMural, Sigh, FallOfPhilosopher, Wall } from './imports'
import { TwelveTouches, AbandonedHouse, ArchitecturalLandscape, Cathedral, Cubofuturism, Metropolitan, Rain, StreetTurn, TimesOfDay } from './imports'
import { AuthorType } from 'src/utils/types'

export const mockAuthorsData: Array<AuthorType> = [
  {
    id: 1,
    name: 'Амелия Кастильо (Amelia Castillo)',
    about: 'Художница из Англиии. Она родилась в маленьком городке, где все жители носили зонты и резиновые сапоги. Амелия с детства любила рисовать на стенах своего дома. Когда ей исполнилось 18 лет, она решила покинуть свой город и отправиться в путешествие по миру, чтобы найти новые источники вдохновения. Её картины были наполнены яркими красками и необычными образами, которые она видела во сне.',
    image: AmeliaCastillo,
    arts: [
      {
        id: 4,
        title: 'Музыка',
        image: Music,
        price: 15000
      },
      {
        id: 14,
        title: 'Разбойники',
        image: Robbers,
        price: 18000
      },
      {
        id: 36,
        title: 'Василиса',
        image: Vasilisa,
        price: 17000
      },
      {
        id: 39,
        title: 'Портрет',
        image: Portrait,
        price: 25000
      },
      {
        id: 41,
        title: 'Слава',
        image: Glory,
        price: 78000
      },
      {
        id: 44,
        title: 'Новый Мурал',
        image: NewMural,
        price: 30000
      },
      {
        id: 50,
        title: 'Дождь',
        image: Rain,
        price: 165000
      }
    ]
  },
  {
    id: 2,
    name: 'Аннабель Смит (Annabelle Smith)',
    about: 'Австралийская художница, которая родилась в семье фермеров. С детства она любила рисовать и мечтала о том, чтобы её картины увидели люди со всего мира. Аннабель училась в художественной школе в Сиднее, где её талант был признан преподавателями и другими студентами. После окончания школы она отправилась в путешествие по Австралии, создавая яркие и красочные картины, отражающие красоту её родной страны.',
    image: AnnabelleSmith,
    arts: [
      {
        id: 8,
        title: 'Улыбка',
        image: Smile,
        price: 70000
      },
      {
        id: 11,
        title: 'Легкий разговор',
        image: EasyConversation,
        price: 38000
      },
      {
        id: 16,
        title: 'Танец',
        image: Dance,
        price: 127000
      },
      {
        id: 21,
        title: 'Концептуализм в философии',
        image: ConceptualismInPhilosophy,
        price: 85000
      },
      {
        id: 22,
        title: 'Свидание с искусством',
        image: DateWithArt,
        price: 127000
      },
      {
        id: 29,
        title: 'Классика в современном интерьере',
        image: ClassicsInInterior,
        price: 101000
      },
      {
        id: 31,
        title: 'Пространство, свет и тишина',
        image: SpaceLightAndSilence,
        price: 225000
      },
      {
        id: 33,
        title: 'Стены',
        image: Walls,
        price: 35000
      },
      {
        id: 38,
        title: 'Зебра',
        image: Zebra,
        price: 420000
      },
      {
        id: 40,
        title: 'Поцелуй',
        image: Kiss,
        price: 128000
      },
      {
        id: 42,
        title: 'Усы',
        image: Mustache,
        price: 75000
      },
      {
        id: 43,
        title: 'Вздох',
        image: Sigh,
        price: 15000
      },
      {
        id: 53,
        title: 'Метрополитен',
        image: Metropolitan,
        price: 300000
      }
    ]
  },
  {
    id: 3,
    name: 'Эмиль Легран (Emile Legrand)',
    about: 'Французский художник, который родился в семье виноделов. С детства он любил рисовать виноградные лозы и бочки с вином. Эмиль учился в художественной школе в Париже, где его талант был замечен преподавателями. После окончания школы он отправился в путешествие по Франции, рисуя пейзажи и портреты людей, которых встречал на своём пути. Его работы отличались особой теплотой и уютом, что делало их популярными среди ценителей искусства.',
    image: EmileLegrand,
    arts: [
      {
        id: 1,
        title: 'Глаз',
        image: Eye,
        price: 75000
      },
      {
        id: 7,
        title: 'Толпа',
        image: Crowd,
        price: 17000
      },
      {
        id: 10,
        title: 'Дорога',
        image: Road,
        price: 445000
      },
      {
        id: 45,
        title: 'Падение философа',
        image: FallOfPhilosopher,
        price: 70000
      },
      {
        id: 48,
        title: 'Архитектурный пейзаж',
        image: ArchitecturalLandscape,
        price: 125000
      },
      {
        id: 54,
        title: 'Поворот улицы',
        image: StreetTurn,
        price: 375000
      }
    ]
  },
  {
    id: 4,
    name: 'Лина Рамирес (Lina Ramirez)',
    about: 'Мексиканская художница, которая родилась в семье музыкантов. Лина с детства увлекалась рисованием и музыкой, но выбрала искусство как свою основную профессию. Она училась в художественном колледже в Мехико, где её талант был признан преподавателями и другими студентами. После колледжа Лина отправилась в путешествие по Мексике, создавая яркие и красочные картины, отражающие красоту её родной страны.',
    image: LinaRamirez,
    arts: [
      {
        id: 3,
        title: 'Медуза',
        image: Jellyfish,
        price: 350000
      },
      {
        id: 6,
        title: 'Сияние',
        image: Shine,
        price: 37000
      },
      {
        id: 12,
        title: 'Усталость',
        image: Fatigue,
        price: 76000
      },
      {
        id: 13,
        title: 'Палитра',
        image: Palette,
        price: 44000
      },
      {
        id: 23,
        title: 'Художник',
        image: Artist,
        price: 95000
      },
      {
        id: 25,
        title: 'Кубизм',
        image: Cubism,
        price: 180000
      },
      {
        id: 28,
        title: 'Картины',
        image: Paintings,
        price: 55000
      },
      {
        id: 35,
        title: 'Шторы',
        image: Curtains,
        price: 137000
      }
    ]
  },
  {
    id: 5,
    name: 'Мигель Ривера (Miguel Rivera)',
    about: 'Испанский художник, родившийся в семье рыбаков. Мигель с детства любил море и мечтал о путешествиях. Он учился в художественной школе в Мадриде, где его работы были признаны талантливыми и выразительными. После школы Мигель отправился в путешествие по Испании, создавая морские пейзажи и картины, посвящённые жизни рыбаков.',
    image: MiguelRivera,
    arts: [
      {
        id: 5,
        title: 'Разворот',
        image: Uturn,
        price: 125000
      },
      {
        id: 15,
        title: 'Тайная вечеря',
        image: LastSupper,
        price: 75000
      },
      {
        id: 19,
        title: 'Гламур в театральных декорациях',
        image: GlamorInTheatricalScenery,
        price: 225000
      },
      {
        id: 26,
        title: 'Онтарио',
        image: Ontario,
        price: 11000
      },
      {
        id: 30,
        title: 'Примеры работ',
        image: WorkExamples,
        price: 180000
      },
      {
        id: 32,
        title: 'Старина',
        image: Old,
        price: 78000
      },
      {
        id: 34,
        title: 'Уютный уголок',
        image: CozyCorner,
        price: 57000
      },
      {
        id: 47,
        title: '12 касаний',
        image: TwelveTouches,
        price: 75000
      },
      {
        id: 49,
        title: 'Времена суток',
        image: TimesOfDay,
        price: 180000
      },
      {
        id: 51,
        title: 'Заброшенный дом',
        image: AbandonedHouse,
        price: 78000
      }
    ]
  },
  {
    id: 6,
    name: 'Саманта Холл (Samantha Hall)',
    about: 'Американская художница, родившаяся в небольшом городе на юге США. Саманта с детства была увлечена искусством и мечтала стать известной художницей. Она училась в художественной школе, где её работы были отмечены преподавателями как талантливые и оригинальные. После школы Саманта отправилась в путешествие по Америке, создавая картины, вдохновлённые природой и культурой разных регионов страны.',
    image: SamanthaHall,
    arts: [
      {
        id: 2,
        title: 'Космос',
        image: Space,
        price: 45000
      },
      {
        id: 9,
        title: 'Горы и река',
        image: MountainsAndRiver,
        price: 175000
      },
      {
        id: 17,
        title: 'Ученый',
        image: Scientist,
        price: 16000
      },
      {
        id: 18,
        title: 'Фермер',
        image: Farmer,
        price: 38000
      },
      {
        id: 20,
        title: 'Едоки лимонов',
        image: LemonEaters,
        price: 180000
      },
      {
        id: 24,
        title: 'Кубизм натюрморт',
        image: CubismStillLife,
        price: 78000
      },
      {
        id: 27,
        title: 'Авангард. Пейзажи в интерьере',
        image: VanguardInInterior,
        price: 420000
      },
      {
        id: 37,
        title: 'Женщина',
        image: Woman,
        price: 144000
      },
      {
        id: 46,
        title: 'Стена',
        image: Wall,
        price: 78000
      },
      {
        id: 52,
        title: 'Кубофутуризм',
        image: Cubofuturism,
        price: 250000
      },
      {
        id: 55,
        title: 'Собор',
        image: Cathedral,
        price: 116000
      }
    ]
  }
]

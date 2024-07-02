import Section from 'src/components/Section/Section'
import Intro from 'src/components/Intro/Intro'
import Events from 'src/components/Events/Events'
import Appraisal from 'src/components/Appraisal/Appraisal'
import Marketplace from 'src/components/Marketplace/Marketplace'
import About from 'src/components/About/About'
import Footer from 'src/components/Footer/Footer'
import styles from './MainPage.module.scss'

const MainPage = () => {
  const sections = [
    {
      id: 'intro',
      component: <Intro />,
    },
    {
      id: 'events',
      component: <Events />,
    },
    {
      id: 'appraisal',
      component: <Appraisal />,
    },
    {
      id: 'marketplace',
      component: <Marketplace />,
    },
    {
      id: 'about',
      component: <About />,
    },
  ]

  return (
    <>
      <main className={styles.main}>
        {sections.map((section, index) => (
          <Section sectionId={section.id} key={index}>
            {section.component}
          </Section>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default MainPage

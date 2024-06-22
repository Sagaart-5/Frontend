import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import styles from './Section.module.scss'

interface SectionProps {
  sectionId: string
  children: ReactNode
}

const Section: FC<SectionProps> = ({ sectionId, children }) => {
  const navigate = useNavigate()
  const { ref } = useInView({
    threshold: 0.9,
    onChange: inView => {
      if (inView) {
        sectionId !== 'intro' ? navigate(`#${sectionId}`) : navigate('/')
      }
    },
  })
  return (
    <section id={sectionId} ref={ref} className={styles.section}>
      {children}
    </section>
  )
}

export default Section

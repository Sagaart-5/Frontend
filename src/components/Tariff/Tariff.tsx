import styles from 'src/components/Tariff/Tariff.module.scss'
import TariffItems from 'src/components/TariffItems/TariffItems'

// interface ArtUploadPageProps {
//   next: () => void
// }

const Tariff = () =>
  {
    return (
      <div className={styles.container}>
        <div style={{ display: 'flex', gap: '20px'}}>
        <TariffItems />
        <TariffItems />
        </div>
        <TariffItems width='100%'/>
      </div>
    )
  }

export default Tariff

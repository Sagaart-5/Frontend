import { useState } from 'react'
import NavBar from 'src/components/NavBar/NavBar'
import ProfileMenu from 'src/components/ProfileMenu/ProfileMenu'
import ArtUploadPage from 'src/components/ArtUploadPage/ArtUploadPage'
import MyRate from '../../components/MyRate/MyRate'
import Subscription from '../../components/Subscription/Subscription'
import Tariff from '../../components/Tariff/Tariff'
import Woman from 'src/assets/images/decor/woman.png'
import styles from './ProfilePage.module.scss'

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const ProfilePage = () => {
  const [activeItem, setActiveItem] = useState<string | null>(
    localStorage.getItem('activeItem') || 'artUpload'
  )

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item)
  }

  return (
    <>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ProfileMenu
            activeItem={activeItem}
            handleMenuItemClick={handleMenuItemClick}
          />
          <img className={styles.image} src={Woman} alt='фото девушки' />
        </div>
        {activeItem === 'artUpload' && <ArtUploadPage />}
        {activeItem === 'myRate' && <MyRate />}
        {activeItem === 'subscription' && <Subscription />}
        {activeItem === 'tariffs' && <Tariff />}
        <div className={styles.background}></div>
      </div>
    </>
  )
}

export default ProfilePage

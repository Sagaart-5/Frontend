import styles from 'src/components/Profile/Profile.module.scss'
import NavBar from 'src/components/NavBar/NavBar'
import Woman from 'src/assets/images/bg/woman.png'
import ProfileMenu from 'src/components/ProfileMenu/ProfileMenu'
import ArtUploadPage from 'src/components/ArtUploadPage/ArtUploadPage'
import MyRate from '../MyRate/MyRate'
import { useState } from 'react'
import Subscription from '../Subscription/Subscription'
import Tariff from '../Tariff/Tariff'

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const Profile = () => {
  const [activeItem, setActiveItem] = useState<string | null>(
    localStorage.getItem('activeItem') || 'artUpload'
  );

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item)
  }

  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ProfileMenu activeItem={activeItem} handleMenuItemClick={handleMenuItemClick} />
          <img className={styles.image} src={Woman} alt='фото девушки' />
        </div>
        {activeItem === 'artUpload' && <ArtUploadPage />}
        {activeItem === 'myRate' && <MyRate />}
        {activeItem === 'subscription' && <Subscription />}
        {activeItem === 'tariffs' && <Tariff />}
        <div className={styles.background}></div>
      </div>
    </div>
  )
}

export default Profile

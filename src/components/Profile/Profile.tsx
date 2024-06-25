import styles from 'src/components/Profile/Profile.module.scss'
import NavBar from 'src/components/NavBar/NavBar'
import Woman from 'src/assets/images/bg/woman.png'
import ProfileMenu from 'src/components/ProfileMenu/ProfileMenu'
import ArtUploadPage from 'src/components/ArtUploadPage/ArtUploadPage'

// interface SectionProps {
//   sectionId: string
//   children: ReactNode
// }

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ProfileMenu />
          <img className={styles.image} src={Woman} alt='фото девушки' />
        </div>
          <ArtUploadPage />
        <div className={styles.background}></div>
      </div>
    </div>
  )
}

export default Profile

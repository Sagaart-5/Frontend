import { Outlet } from 'react-router-dom'
import Header from 'src/components/Header/Header'
import styles from './App.module.scss'
// import { useEffect, useState } from 'react'
// import * as Api from 'src/services/utils'

const App = () => {
  // const [arts, getEvents] = useState([])
  // console.log('arts: ', arts)

  // useEffect(() => {
  //   Api.getEvents()
  //     .then(data => {
  //       getEvents(data)
  //       console.log('data: ', data)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }, [])

  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App

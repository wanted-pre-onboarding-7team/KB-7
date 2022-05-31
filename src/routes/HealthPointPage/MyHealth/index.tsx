import TotalScore from './TotalScore'
import UserInfo from './UserInfo'
import YearlyChart from './YearlyChart'

import styles from './myHealth.module.scss'

const MyHealth = () => {
  return (
    <section className={styles.myHealth}>
      <TotalScore />
      <UserInfo />
      <YearlyChart />
    </section>
  )
}

export default MyHealth

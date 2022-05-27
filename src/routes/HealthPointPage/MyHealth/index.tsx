import styles from './myHealth.module.scss'

import TotalScore from './TotalScore'
import UserInfo from './UserInfo'
import YearlyChart from './YearlyChart'

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

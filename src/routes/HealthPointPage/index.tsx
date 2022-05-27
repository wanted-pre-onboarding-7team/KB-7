import MyHealth from './MyHealth'

import styles from './healthPointPage.module.scss'
import HealthComparePage from './HealthComparePage'

const HealthPointPage = () => {
  return (
    <div className={styles.page}>
      <MyHealth />
      <HealthComparePage />
    </div>
  )
}

export default HealthPointPage

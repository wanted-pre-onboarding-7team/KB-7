import MyHealth from './MyHealth'

import styles from './healthPointPage.module.scss'
import HealthComparePage from './HealthComparePage'

import OCare from './OCare'

const HealthPointPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>마이헬스</header>
      <main className={styles.page}>
        <MyHealth />
        <HealthComparePage />
        <OCare />
      </main>
    </div>
  )
}

export default HealthPointPage

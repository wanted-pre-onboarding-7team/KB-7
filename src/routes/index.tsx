import styles from './routes.module.scss'

import HealthPointPage from './HealthPointPage'
import YearLogic from './HealthPointPage/ComparisonChart/YearLogic'

const App = () => {
  return (
    <div className={styles.app}>
      <HealthPointPage />
      <YearLogic />
    </div>
  )
}

export default App

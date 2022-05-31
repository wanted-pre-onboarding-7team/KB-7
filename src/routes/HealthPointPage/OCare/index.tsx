import { MY_MAX_SCORE, HEALTH_POINT_NAME } from './constants'
import HealthPointCard from './HealthPointCard'

import styles from './oCare.module.scss'

const OCare = () => {
  return (
    <section className={styles.oCare}>
      <h1 className={styles.title}>맞춤 건강 관리</h1>
      <p className={styles.desc}>
        오케어와 함께 건강 관리를 해보세요.
        <br />
        건강점수를 최대 <strong>{MY_MAX_SCORE}점</strong>까지 올릴 수 있어요.
      </p>
      <ul>
        {HEALTH_POINT_NAME.map((item, index) => (
          <HealthPointCard key={`card-${item.dataKey}`} index={index} dataKey={item.dataKey} name={item.name} />
        ))}
      </ul>
    </section>
  )
}

export default OCare

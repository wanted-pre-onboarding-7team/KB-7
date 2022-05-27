import { VictoryAnimation, VictoryLabel, VictoryPie } from 'victory'
import dayjs from 'dayjs'

import healthInfo from 'assets/data/healthInfo.json'

import CustomLabel from './CustomLabel'
import CustomSlice from './CustomSlice'

import styles from './totalScore.module.scss'

const TotalScore = () => {
  const healthScore = Number(healthInfo.userInfo.healthScore)
  const healthDate = dayjs(healthInfo.userInfo.healthDate).format('YYYY.MM.DD')

  const data = [{ y: 1000 - healthScore, background: true }, { y: healthScore }]

  return (
    <div className={styles.totalScore}>
      <h2 className={styles.title}>김헬스님의 건강 점수</h2>
      <div>
        <VictoryPie
          data={data}
          cornerRadius={50}
          startAngle={-135}
          endAngle={135}
          innerRadius={120}
          dataComponent={<CustomSlice />}
          labelComponent={<CustomLabel healthScore={healthScore} />}
          animate={{ duration: 1000 }}
        />
      </div>
      <div className={styles.sub}>
        <p className={styles.healthDate}>{healthDate}</p>
        <button type='button'>건강검진 결과 가져오기 &nbsp;&nbsp;&nbsp; &gt;</button>
      </div>
    </div>
  )
}

export default TotalScore

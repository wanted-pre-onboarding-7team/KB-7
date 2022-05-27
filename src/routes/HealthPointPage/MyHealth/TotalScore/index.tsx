import { VictoryPie } from 'victory'
import dayjs from 'dayjs'

import healthInfo from 'assets/data/healthInfo.json'

import CustomSlice from './CustomSlice'

import styles from './totalScore.module.scss'
import { IIcon } from 'assets/svgs'

const TotalScore = () => {
  const healthScore = Number(healthInfo.userInfo.healthScore)
  const healthDate = dayjs(healthInfo.userInfo.healthDate).format('YYYY.MM.DD')

  const data = [{ y: 1000 - healthScore, background: true }, { y: healthScore }]

  return (
    <div className={styles.totalScore}>
      <h2 className={styles.title}>
        김헬스님의 건강점수
        <IIcon className={styles.iIcon} />
      </h2>

      <div>
        <VictoryPie
          data={data}
          cornerRadius={50}
          startAngle={-135}
          endAngle={135}
          labels={() => null}
          innerRadius={120}
          dataComponent={<CustomSlice />}
          animate={{ duration: 1000 }}
        />
        <div className={styles.pieChartText}>
          <mark>{healthScore}</mark>점
        </div>
      </div>
      <div className={styles.sub}>
        <p className={styles.healthDate}>{healthDate}</p>
        <button type='button'>건강검진 결과 가져오기 &nbsp;&nbsp;&nbsp; &gt;</button>
      </div>
    </div>
  )
}

export default TotalScore

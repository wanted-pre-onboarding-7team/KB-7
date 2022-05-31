import { useState } from 'react'
import { useMount } from 'react-use'
import { VictoryPie } from 'victory'
import dayjs from 'dayjs'

import { IIcon } from 'assets/svgs'
import healthInfo from 'assets/data/healthInfo.json'

import CustomSlice from './CustomSlice'

import styles from './totalScore.module.scss'

const TotalScore = () => {
  const healthScore = Number(healthInfo.userInfo.healthScore)
  const healthDate = dayjs(healthInfo.userInfo.healthDate).format('YYYY.MM.DD')

  const [data, SetData] = useState([{ y: 1000, background: true }, { y: 0 }])

  const dataUpdate = () => {
    SetData([{ y: 1000 - healthScore, background: true }, { y: healthScore }])
  }

  useMount(() => {
    setTimeout(dataUpdate, 1000)
  })

  return (
    <div className={styles.totalScore}>
      <h1 className={styles.title}>
        김헬스님의 건강점수
        <IIcon className={styles.iIcon} />
      </h1>
      <div className={styles.pieChart}>
        <VictoryPie
          data={data}
          cornerRadius={50}
          startAngle={-135}
          endAngle={135}
          labels={() => null}
          innerRadius={120}
          dataComponent={<CustomSlice />}
          animate={{ duration: 1000, easing: 'bounce' }}
        />
        <p className={styles.pieChartText}>
          <strong>{healthScore}</strong>점
        </p>
        <div className={styles.sub}>
          <span className={styles.healthDate}>{healthDate}</span>
          <button type='button'>건강검진 결과 가져오기 &nbsp;&nbsp; 〉</button>
        </div>
      </div>
    </div>
  )
}

export default TotalScore

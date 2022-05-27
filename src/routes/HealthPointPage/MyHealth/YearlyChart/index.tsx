import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'
import dayjs from 'dayjs'

import healthInfo from 'assets/data/healthInfo.json'

import styles from './yearlyChart.module.scss'

const yearlyChart = () => {
  const recentScoreData = healthInfo.healthScoreList
    .sort((a, b) => Number(b.SUBMIT_DATE) - Number(a.SUBMIT_DATE))
    .slice(0, 4)
    .reverse()
    .map((data) => {
      return { x: dayjs(data.SUBMIT_DATE).format('YYYY'), y: Number(data.SCORE) }
    })

  const analyzeMsg = '총점이 지난 해보다 100점 높아졌어요'

  return (
    <div>
      <div>
        <span>나의 건강점수 분석 결과</span>
        <button type='button'>검진결과 자세히</button>
      </div>
      <div className={styles.analyseScore}>{analyzeMsg}</div>
      <VictoryChart domainPadding={20}>
        <VictoryBar x='x' y='y' data={recentScoreData} style={{ data: { fill: '#ededed' } }} />
        <VictoryAxis tickFormat={(x) => x} />
        <VictoryAxis dependentAxis tickValues={[0.2, 0.4, 0.6, 0.8, 1]} tickFormat={(x) => 1000 * x} />
      </VictoryChart>
    </div>
  )
}

export default yearlyChart

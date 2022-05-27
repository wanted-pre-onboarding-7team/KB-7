import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter } from 'victory'
import dayjs from 'dayjs'

import healthInfo from 'assets/data/healthInfo.json'

import styles from './yearlyChart.module.scss'
import { compareScore } from './utils'
import { CallbackArgs } from 'victory-core'

const yearlyChart = () => {
  const recentScoreData = healthInfo.healthScoreList
    .sort((a, b) => Number(b.SUBMIT_DATE) - Number(a.SUBMIT_DATE))
    .slice(0, 4)
    .reverse()
    .map((data, index) => {
      return {
        x: dayjs(data.SUBMIT_DATE).format('YYYY'),
        y: Number(data.SCORE),
        location: Number(index),
      }
    })

  const compareMsg = compareScore(recentScoreData)

  return (
    <div className={styles.yearlyChart}>
      <div className={styles.top}>
        <span className={styles.title}>나의 건강점수 분석 결과</span>
        <button type='button'>검진결과 자세히</button>
      </div>
      <div className={styles.analyseMsgWrapper}>{compareMsg}</div>
      <VictoryChart domainPadding={{ x: [30, 30], y: [0, 10] }} width={500} height={300}>
        <VictoryAxis
          tickFormat={(x) => x}
          style={{
            axis: { stroke: 'transparent' },
            ticks: { size: 0 },
            tickLabels: { fill: '#333333', fontSize: 25, fontWeight: 900 },
          }}
        />
        <VictoryGroup data={recentScoreData} height={300}>
          <VictoryBar
            style={{ data: { fill: ({ datum }) => (datum.location < 3 ? '#ededed' : '#ffbf00') } }}
            barWidth={50}
          />
          <VictoryLine
            style={{
              data: { stroke: '#676767', strokeWidth: 3 },
            }}
          />
          <VictoryScatter
            data={recentScoreData}
            labels={({ datum }) => `${datum.y}점`}
            style={{
              data: {
                fill: ({ datum }) => (datum.location < 3 ? '#fefefe' : '#ff801f'),
                stroke: ({ datum }) => (datum.location < 3 ? '#676767' : '#ff801f'),
                strokeWidth: 3,
              },
              labels: {
                fontSize: 25,
                fontWeight: 900,
                fill: ({ datum }: CallbackArgs) => (datum.location < 3 ? '#333333' : '#ff801f'),
              },
            }}
            size={5}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

export default yearlyChart

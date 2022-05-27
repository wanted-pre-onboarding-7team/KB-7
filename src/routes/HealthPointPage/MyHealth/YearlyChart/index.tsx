import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
} from 'victory'
import dayjs from 'dayjs'

import healthInfo from 'assets/data/healthInfo.json'

import styles from './yearlyChart.module.scss'
import { compareScore } from './utils'

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

  // test data
  /* const recentScoreData = [
    { x: '2017', y: 870 },
    { x: '2018', y: 880 },
    { x: '2019', y: 900 },
    { x: '2021', y: 900 },
  ] */

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
            tickLabels: { fill: '#333333', fontSize: 25 },
          }}
        />
        <VictoryGroup data={recentScoreData} height={300}>
          <VictoryBar
            style={{ data: { fill: ({ datum }) => (datum.location < 3 ? '#ededed' : '#ffbf00') } }}
            barWidth={50}
            x='x'
            y='y'
          />
          <VictoryLine
            style={{
              data: { stroke: '#676767', strokeWidth: 3 },
            }}
          />
          <VictoryScatter
            labels={({ datum }) => `${datum.y}점`}
            labelComponent={
              <VictoryLabel textAnchor='middle' verticalAnchor='middle' y={40} style={{ fontSize: 25 }} />
            }
            style={{
              data: {
                fill: ({ datum }) => (datum.location < 3 ? '#fefefe' : '#ff801f'),
                stroke: ({ datum }) => (datum.location < 3 ? '#676767' : '#ff801f'),
                strokeWidth: 3,
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

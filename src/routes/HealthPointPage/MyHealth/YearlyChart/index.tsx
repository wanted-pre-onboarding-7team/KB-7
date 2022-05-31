import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter } from 'victory'
import { CallbackArgs } from 'victory-core'
import dayjs from 'dayjs'

import healthInfo from 'assets/data/healthInfo.json'
import { compareScore } from './utils'

import styles from './yearlyChart.module.scss'

const YearlyChart = () => {
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
        <p className={styles.title}>
          나의 건강점수
          <br />
          분석 결과
        </p>
        <button type='button'>검진결과 자세히</button>
      </div>
      <div className={styles.analyseMsgWrapper}>{compareMsg}</div>
      <VictoryChart domainPadding={{ x: [30, 30], y: [0, 10] }} width={500} height={300}>
        <VictoryAxis
          tickFormat={(x) => x}
          style={{
            axis: { stroke: 'transparent' },
            ticks: { size: 0 },
            tickLabels: { fill: '#333333', fontSize: '20px', fontWeight: 600, fontFamily: 'Spoqa Han Sans Neo' },
          }}
        />
        <VictoryGroup data={recentScoreData} height={300}>
          <VictoryBar
            style={{
              data: { fill: ({ datum }) => (datum.location < recentScoreData.length - 1 ? '#ededed' : '#ffbf00') },
            }}
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
                fill: ({ datum }) => (datum.location < recentScoreData.length - 1 ? '#fefefe' : '#ff801f'),
                stroke: ({ datum }) => (datum.location < recentScoreData.length - 1 ? '#676767' : '#ff801f'),
                strokeWidth: 3,
              },
              labels: {
                fontFamily: 'Spoqa Han Sans Neo',
                fontSize: '20px',
                fontWeight: 600,
                fill: ({ datum }: CallbackArgs) =>
                  datum.location < recentScoreData.length - 1 ? '#333333' : '#ff801f',
              },
            }}
            size={5}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

export default YearlyChart

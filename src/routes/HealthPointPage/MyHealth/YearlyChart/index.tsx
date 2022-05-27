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

  console.log('recentScoreData:', recentScoreData)
  const analyzeMsg = '총점이 지난 해보다 100점 높아졌어요'

  return (
    <div>
      <div>
        <span>나의 건강점수 분석 결과</span>
        <button type='button'>검진결과 자세히</button>
      </div>
      <div className={styles.analyseScore}>{analyzeMsg}</div>
      <VictoryChart domainPadding={{ x: [30, 30] }} width={500} height={300}>
        <VictoryAxis tickFormat={(x) => x} />
        <VictoryGroup
          data={recentScoreData}
          labels={({ datum }) => `${datum.y}점`}
          labelComponent={<VictoryLabel textAnchor='middle' verticalAnchor='middle' y={25} style={{ fontSize: 25 }} />}
        >
          <VictoryBar
            x='x'
            y='y'
            style={{ data: { fill: ({ datum }) => (datum.location < 3 ? '#ededed' : '#ff801f') } }}
            barWidth={30}
          />
          <VictoryScatter
            style={{
              data: {
                fill: ({ datum }) => (datum.location < 3 ? '#fefefe' : '#ff801f'),
                stroke: ({ datum }) => (datum.location < 3 ? '#000000' : '#ff801f'),
                fillOpacity: 0.7,
                strokeWidth: 3,
              },
            }}
            size={5}
          />
          <VictoryLine
            style={{
              data: { stroke: '#676767' },
              parent: { border: '1px solid #ccc' },
            }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

export default yearlyChart

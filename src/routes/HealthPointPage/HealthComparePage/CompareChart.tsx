import { VictoryBar, VictoryChart, VictoryAxis, VictoryScatter, VictoryLine } from 'victory'

interface Props {
  myData: number
  compareData: number
  unit: string
  age?: number
  sex?: string
}

const CompareChart = (Props: Props) => {
  const { myData, compareData, age, sex, unit } = Props
  const compareObject = age && sex ? `${age}대 ${sex}` : '10년 후'

  const beforeData = [{ x: 1, y: myData }]
  const afterData = [{ x: 2, y: compareData }]

  return (
    <VictoryChart domainPadding={70}>
      <VictoryAxis
        tickFormat={['나', compareObject]}
        style={{
          axis: { strokeWidth: 0 },
          tickLabels: { fontSize: '20px', fontWeight: 600, fontFamily: 'Spoqa Han Sans Neo' },
        }}
      />
      <VictoryBar
        data={beforeData}
        labels={({ datum }) => `${datum.y.toLocaleString()}${unit}`}
        style={{
          data: { fill: '#ffbf00' },
          labels: {
            fontFamily: 'Spoqa Han Sans Neo',
            fontSize: '20px',
            fontWeight: 600,
            fill: '#ff801f',
          },
        }}
        barWidth={45}
      />
      <VictoryBar
        data={afterData}
        labels={({ datum }) => `${datum.y.toLocaleString()}${unit}`}
        style={{
          data: { fill: '#ff801f' },
          labels: {
            fontFamily: 'Spoqa Han Sans Neo',
            fontWeight: 600,
            fontSize: '20px',
          },
        }}
        barWidth={45}
      />
      <VictoryLine
        style={{
          data: { stroke: '#989A99' },
          parent: { border: '1px solid #ccc' },
        }}
        data={[...beforeData, ...afterData]}
      />
      <VictoryScatter
        style={{
          data: {
            fill: ({ datum }) => (datum.x === 1 ? '#ff801f' : '#ffffff'),
            stroke: '#989A99',
            strokeWidth: ({ datum }) => (datum.x === 1 ? 0 : 3),
          },
        }}
        size={7}
        data={[...beforeData, ...afterData]}
      />
    </VictoryChart>
  )
}

export default CompareChart

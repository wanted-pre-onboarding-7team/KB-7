import { VictoryBar, VictoryChart, VictoryAxis, VictoryScatter, VictoryLine } from 'victory'

interface Props {
  myData: number
  compareData: number
  age?: number
  sex?: string
}

const CompareChart = (Props: Props) => {
  const { myData, compareData, age, sex } = Props
  const compareObject = age && sex ? `${age}대 ${sex}` : '10년 후'

  const beforeData = [{ x: 1, y: myData }]
  const afterData = [{ x: 2, y: compareData }]

  return (
    <VictoryChart domainPadding={70}>
      <VictoryAxis tickFormat={['나', compareObject]} style={{ axis: { strokeWidth: 0 } }} />
      <VictoryBar
        data={beforeData}
        labels={({ datum }) => datum.y}
        style={{
          data: { fill: '#ffbf00' },
          labels: {
            fontSize: 17,
            fill: '#ff801f',
          },
        }}
        barWidth={45}
      />
      <VictoryBar
        data={afterData}
        labels={({ datum }) => datum.y}
        style={{
          data: { fill: '#ff801f' },
          labels: {
            fontSize: 17,
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
            fill: ({ datum }) => (datum.x === 1 ? '#989A99' : '#ffffff'),
            stroke: '#989A99',
            strokeWidth: 3,
          },
        }}
        size={7}
        data={[...beforeData, ...afterData]}
      />
    </VictoryChart>
  )
}

export default CompareChart

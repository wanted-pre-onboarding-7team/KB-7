import { VictoryLabel } from 'victory'

interface IProps {
  healthScore: number
}

const CustomLabel = ({ healthScore }: IProps) => {
  return (
    <VictoryLabel
      textAnchor='middle'
      verticalAnchor='middle'
      x={200}
      y={200}
      text={`${healthScore}점`}
      style={{ fontSize: 45 }}
    />
  )
}

export default CustomLabel

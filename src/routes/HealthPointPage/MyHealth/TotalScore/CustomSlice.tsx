import { Slice } from 'victory'

const CustomSlice = (props: any) => {
  const { datum } = props

  const endPoint = 270 * (datum.y / 1000) - 135

  return (
    <Slice
      {...props}
      cornerRadius={50}
      sliceStartAngle={-135}
      sliceEndAngle={datum.background ? 135 : endPoint}
      style={{ fill: datum.background ? '#ededed' : '#ffbf00' }}
    />
  )
}

export default CustomSlice

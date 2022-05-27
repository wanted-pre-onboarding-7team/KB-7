interface IData {
  x: string
  y: number
}

export const compareScore = (data: IData[]) => {
  const thisYear = 2021
  const latestData = data[data.length - 1]
  const prevData = data[data.length - 2]

  if (!prevData) return `${latestData.x}년 건강 점수는\n${latestData.y}점입니다.`

  const diff = latestData.y - prevData.y

  if (Number(latestData.x) === thisYear && Number(prevData.x) === thisYear - 1) {
    if (diff > 0)
      return (
        <p>
          건강 점수는
          <br />
          총점이 지난해보다 &nbsp;<strong>{`${diff}점 높아졌어요`}</strong>
        </p>
      )

    if (diff < 0)
      return (
        <p>
          건강 점수는
          <br />
          총점이 지난해보다 &nbsp;<strong>{`${diff * -1}점 낮아졌어요`}</strong>
        </p>
      )

    return (
      <p>
        건강 점수는
        <br />
        총점이 지난해와 동일해요
      </p>
    )
  }

  if (diff > 0)
    return (
      <p>
        건강 점수는
        <br />
        {`총점이 ${prevData.x}년보다`}
        &nbsp;<strong>{`${diff}점 높아졌어요`}</strong>
      </p>
    )

  if (diff < 0)
    return (
      <p>
        건강 점수는
        <br />
        {`총점이 ${prevData.x}년보다`}
        &nbsp;<strong>{`${diff * -1}점 낮아졌어요`}</strong>
      </p>
    )

  return (
    <p>
      건강 점수는
      <br />
      {`총점이 ${prevData.x}년과 동일해요`}
    </p>
  )
}

import CompareChart from './CompareChart'

import healthInfo from 'assets/data/healthInfo.json'

import styles from './healthComparePage.module.scss'
import { mediChangeStyle, whChangeStyle, hsChangeStyle } from './hooks/useChangeStyle'

const HealthComparePage = () => {
  const data = JSON.parse(JSON.stringify(healthInfo))

  const lastArray = (arr: string): number => {
    const newArr = arr
      .replace(/\[|\]/g, '')
      .split(', ')
      .map((el) => Number(el))
      .sort((a, b) => a - b)

    return newArr[newArr.length - 1]
  }

  const hscore = Number(data.wxcResultMap.hscorePercent)
  const resultScore = Math.ceil(100 - hscore)
  const scorePercnet = resultScore <= 50 ? `상위 ${resultScore}%` : `하위 ${resultScore}%`

  const age = Math.floor(data.wxcResultMap.paramMap.age / 10) * 10
  const sex = Number(data.wxcResultMap.paramMap.sex) ? '남성' : '여성'
  const wHscore = Number(data.wxcResultMap.wHscore)
  const hscorePeer = Number(data.wxcResultMap.hscore_peer)
  const diffHs = wHscore - hscorePeer
  const resultHscore = Math.abs(wHscore - hscorePeer)

  const numMedi = Number(data.wxcResultMap.medi)
  const maxMediDy = lastArray(data.wxcResultMap.mediDy)
  const diffMedi = numMedi - maxMediDy
  const diffMediResult = Math.abs(diffMedi)

  const numWh = Number(data.wxcResultMap.wHscore)
  const maxWh = lastArray(data.wxcResultMap.wHscoreDy)
  const diffWh = numWh - maxWh
  const diffWhResult = Math.abs(diffWh)

  const mediStyleList = mediChangeStyle(diffMedi)
  const whStyleList = whChangeStyle(diffWh)
  const hsStyleList = hsChangeStyle(diffHs)

  return (
    <div>
      <div>
        <p className={styles.healthDescript}>
          {age}대 {sex} 평균보다
          <br />
          <strong>{resultHscore}점 </strong>
          <span className={styles.scorePercent}>{scorePercnet}</span>
        </p>
        <CompareChart myData={wHscore} compareData={hscorePeer} age={age} sex={sex} />
      </div>
      <div>
        <h1 className={styles.mainTitle}>나의 10년 후 건강 예측</h1>
        <p className={styles.healthDescript}>
          10년 후 예상 건강 점수는
          <br />
          현재보다 &nbsp;
          <strong style={{ color: whStyleList.color }}>
            {diffWhResult}
            {whStyleList.title}
          </strong>
        </p>
        <CompareChart myData={numWh} compareData={maxWh} />
      </div>
      <div>
        <p className={styles.healthDescript}>
          10년 후 예상 의료비는
          <br />
          현재보다 &nbsp;
          <strong style={{ color: mediStyleList.color }}>
            {diffMediResult}
            {mediStyleList.title}
          </strong>
        </p>
        <CompareChart myData={numMedi} compareData={maxMediDy} />
      </div>
    </div>
  )
}

export default HealthComparePage

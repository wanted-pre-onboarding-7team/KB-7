import healthInfo from 'assets/data/healthInfo.json'

import { mediChangeStyle, whChangeStyle, hsChangeStyle } from './hooks/useChangeStyle'
import CompareChart from './CompareChart'

import styles from './healthComparePage.module.scss'

const HealthComparePage = () => {
  const data = JSON.parse(JSON.stringify(healthInfo))

  const lastArray = (arr: string): number => {
    const newArr = arr
      .replace(/\[|\]/g, '')
      .split(', ')
      .map((el) => Number(el))

    return newArr[newArr.length - 1]
  }

  const hscore = Number(data.wxcResultMap.hscorePercent)
  const resultScore = Math.ceil(100 - hscore)
  const scorePercnet = resultScore <= 50 ? `상위 ${resultScore}%` : `하위 ${resultScore}%`

  const age = Math.floor(data.wxcResultMap.paramMap.age / 10) * 10
  const sex = Number(data.wxcResultMap.paramMap.sex) ? '남성' : '여성'
  const wHscore = Number(data.wxcResultMap.wHscore)
  const hscorePeer = Number(data.wxcResultMap.hscore_peer)
  const diffscorePeer = wHscore - hscorePeer
  const resultHscore = Math.abs(diffscorePeer)

  const numMedi = Number(data.wxcResultMap.medi)
  const maxMediDy = lastArray(data.wxcResultMap.mediDy)
  const diffMedi = numMedi - maxMediDy
  const diffMediResult = Math.abs(diffMedi)

  const numWh = Number(data.wxcResultMap.wHscore)
  const maxWh = lastArray(data.wxcResultMap.wHscoreDy)
  const diffWh = numWh - maxWh
  const diffWhResult = Math.abs(diffWh)

  const hsStyleList = hsChangeStyle(diffscorePeer)
  const whStyleList = whChangeStyle(diffWh)
  const mediStyleList = mediChangeStyle(diffMedi)

  return (
    <section className={styles.healthCompare}>
      <div className={styles.compareSection}>
        <p className={styles.healthDescript}>
          {age}대 {sex} 평균보다
          <br />
          <span className={styles.accent} style={{ color: hsStyleList.color }}>
            {resultHscore}점 {hsStyleList.title}
          </span>
          <span className={styles.scorePercent}>{scorePercnet}</span>
        </p>
        <CompareChart myData={wHscore} compareData={hscorePeer} age={age} sex={sex} unit={hsStyleList.unit} />
      </div>
      <div className={styles.compareSection}>
        <h1 className={styles.mainTitle}>나의 10년 후 건강 예측</h1>
        <p className={styles.healthDescript}>
          10년 후 예상 건강 점수는
          <br />
          현재보다 &nbsp;
          <span className={styles.accent} style={{ color: whStyleList.color }}>
            {diffWhResult}점{whStyleList.title}
          </span>
        </p>
        <CompareChart myData={numWh} compareData={maxWh} unit={whStyleList.unit} />
      </div>
      <div className={styles.compareSection}>
        <p className={styles.healthDescript}>
          10년 후 예상 의료비는
          <br />
          현재보다 &nbsp;
          <span className={styles.accent} style={{ color: mediStyleList.color }}>
            {diffMediResult.toLocaleString()}원{mediStyleList.title}
          </span>
        </p>
        <CompareChart myData={numMedi} compareData={maxMediDy} unit={mediStyleList.unit} />
      </div>
    </section>
  )
}

export default HealthComparePage

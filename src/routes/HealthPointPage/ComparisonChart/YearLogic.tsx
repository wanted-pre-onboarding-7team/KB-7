import healthInfo from 'assets/data/healthInfo.json'
import { useMemo } from 'react'
import styles from './yearLogic.module.scss'

const YearLogic = () => {
  const data = JSON.parse(JSON.stringify(healthInfo))

  const maxScore = (arr: string) => {
    const newArr = arr
      .replace(/\[|\]/g, '')
      .split(', ')
      .map((el) => Number(el))
      .sort((a, b) => a - b)

    return newArr[newArr.length - 1] // [2, 3, 4, 5, 6, 7]
  }

  /*
    - 10년 후 예상 의료비 그래프
    현재 내 의료비 및 10년 후 예상 의료비 그래프
    금액이 많으면 ’00원 많아요’ 빨강 텍스트 // #ff0000
    금액이 적으면 ‘00원 적어요‘ 파랑 텍스트 // #0000ff
    동일하면 ‘현재와 같아요＇검정 텍스트 // #333333

    wxcResultMap > medi 값과 mediDy 배열의 마지막 값 비교
  */
  const diffMedi = useMemo(() => {
    const maxMediDy = maxScore(data.wxcResultMap.mediDy) // 최대 값 : 129455
    const numMedi = Number(data.wxcResultMap.medi) // 내 점수 : 93335

    return numMedi - maxMediDy // 93335 - 129455
  }, [data.wxcResultMap.mediDy, data.wxcResultMap.medi])

  /*
    - 10년 후 예상 건강 그래프
    현재 내 점수 및 10년 후 예상 점수 그래프
    점수가 낮으면 ’00점 낮아요’ 빨강 텍스트 // #ff0000
    점수가 높으면 ‘00점 높아요‘ 파랑 텍스트 // #0000ff
    동일하면 ‘현재와 같아요＇검정 텍스트 // #333333

    wxcResultMap > wHscore 값과 wHscoreDy 배열의 마지막 값 비교
  */
  const diffWh = useMemo(() => {
    const maxMediDy = maxScore(data.wxcResultMap.wHscore) // 최대 값 : 129455
    const numMedi = Number(data.wxcResultMap.wHscoreDy) // 내 점수 : 93335

    return numMedi - maxMediDy // 93335 - 129455
  }, [data.wxcResultMap.wHscoreDy, data.wxcResultMap.wHscore])

  return (
    <div>
      <h1 className={styles.mainTitle}>나의 10년 후 건강 예측</h1>
      <p className={styles.healthPointDesc}>
        10년 후 예상 건강 점수는
        <br />
        현재보다 <strong>21점 낮아요.</strong>
      </p>
      <p className={styles.medicalExpensesDesc}>
        10년 후 예상 의료비는
        <br />
        현재보다 <strong>{diffMedi} 많아요.</strong>
      </p>
    </div>
  )
}

export default YearLogic

const diffMediTitle = [
  { id: 1, title: '많아요' }, // #ff0000
  { id: 2, title: '적어요' }, // #0000ff
  { id: 3, title: '현재와 같아요' }, // #333333
]

const diffWhTitle = [
  { id: 1, title: '낮아요' }, // #ff0000
  { id: 2, title: '높아요' }, // #0000ff
  { id: 3, title: '현재와 같아요' }, // #333333
]

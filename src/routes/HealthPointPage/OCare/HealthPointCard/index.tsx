import { getColor, getCurrentFigure, getCurrentStatus, getUnit, getNormalRange, getTagList, getCareDesc } from './utils'

import Icon from './Icon'
import TagList from './TagList'

import styles from './healthPointCard.module.scss'

interface Props {
  index: number
  dataKey: string
  name: string
}

const HealthPointCard = ({ index, dataKey, name }: Props) => {
  const titleNumber = String(index + 1).padStart(2, '0')
  const color = getColor(dataKey)

  const figure = getCurrentFigure(dataKey)
  const unit = getUnit(dataKey)
  const status = getCurrentStatus(dataKey)

  const normalRange = getNormalRange(dataKey)
  const tagList = getTagList(dataKey)
  const careDesc = getCareDesc(dataKey)

  return (
    <li className={styles.card}>
      <h1 className={styles.titleNumber}>{titleNumber}</h1>
      <h2 className={styles.title} style={{ color }}>
        {name}
      </h2>
      <Icon dataKey={dataKey} />
      <p>
        {unit && (
          <span>
            현재 {name} {figure} {unit}로
            <br />
          </span>
        )}
        <strong>{status}</strong>입니다.
      </p>
      {normalRange && <p className={styles.normalRange}>{normalRange}</p>}
      <TagList tagList={tagList} />
      <div className={styles.careDesc}>
        <h3 className={styles.careTitle} style={{ color }}>
          이렇게 관리해 보세요!
        </h3>
        <ul className={styles.descList}>
          {careDesc.map((desc) => (
            <li key={desc}>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default HealthPointCard

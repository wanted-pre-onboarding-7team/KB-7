import healthInfo from 'assets/data/healthInfo.json'

import styles from './userInfo.module.scss'

const UserInfo = () => {
  const { age, resHeight, sex } = healthInfo.wxcResultMap.paramMap

  return (
    <dl className={styles.userInfo}>
      <dt>기본 정보</dt>
      <div className={styles.infoValueWrapper}>
        <dd>{sex === '1' ? '남성' : '여성'}</dd>
        <dd className={styles.infoValue}>{`${age}세`}</dd>
        <dd className={styles.infoValue}>{`${resHeight}cm`}</dd>
      </div>
    </dl>
  )
}

export default UserInfo

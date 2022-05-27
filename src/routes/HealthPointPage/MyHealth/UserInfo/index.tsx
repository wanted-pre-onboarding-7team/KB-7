import healthInfo from 'assets/data/healthInfo.json'

import styles from './userInfo.module.scss'

const UserInfo = () => {
  const { age, resHeight, sex } = healthInfo.wxcResultMap.paramMap

  return (
    <div className={styles.userInfo}>
      <span className={styles.infoTitle}>기본 정보</span>
      <div className={styles.infoValueWrapper}>
        <span>{sex === '1' ? '남성' : '여성'}</span>
        <span className={styles.infoValue}>{`${age}세`}</span>
        <span className={styles.infoValue}>{`${resHeight}cm`}</span>
      </div>
    </div>
  )
}

export default UserInfo

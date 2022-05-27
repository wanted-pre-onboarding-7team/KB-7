export const mediChangeStyle = (diffMedi: number) => {
  const mediStyleList = { title: '', color: '' }

  if (diffMedi > 0) {
    mediStyleList.title = ' 적어요.'
    mediStyleList.color = 'blue'
  }

  if (diffMedi < 0) {
    mediStyleList.title = ' 많아요.'
    mediStyleList.color = '#ff801f'
  }

  if (diffMedi === 0) {
    mediStyleList.title = ' 평균과 같아요.'
    mediStyleList.color = 'black'
  }

  return mediStyleList
}

export const whChangeStyle = (diffWh: number) => {
  const whStyleList = { title: '', color: '' }

  if (diffWh > 0) {
    whStyleList.title = ' 높아요.'
    whStyleList.color = '#ff801f'
  }

  if (diffWh < 0) {
    whStyleList.title = ' 낮아요.'
    whStyleList.color = 'blue'
  }

  if (diffWh === 0) {
    whStyleList.title = ' 평균과 같아요.'
    whStyleList.color = 'black'
  }

  return whStyleList
}

export const hsChangeStyle = (diffHs: number) => {
  const hsStyleList = { title: '', color: '' }

  if (diffHs > 0) {
    hsStyleList.title = ' 높아요.'
    hsStyleList.color = '#ff801f'
  }

  if (diffHs < 0) {
    hsStyleList.title = ' 낮아요.'
    hsStyleList.color = 'blue'
  }

  if (diffHs === 0) {
    hsStyleList.title = ' 평균과 같아요.'
    hsStyleList.color = 'black'
  }

  return hsStyleList
}

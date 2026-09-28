const isTablet = () => window.matchMedia('(max-width: 768px)').matches

const isOvercrowded = (items) => items.length > 4

export const getVisibleItems = (items, isExpanded) => {
  if (isTablet() && isOvercrowded(items) && !isExpanded) {
    return items.slice(0, 4)
  }
  return items
}

export const shouldShowRefresh = (items, isExpanded) => {
  return isTablet() && isOvercrowded(items) && !isExpanded
}

export const createResizeHandler = (callback, delay = 150) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(callback, delay)
  }
}

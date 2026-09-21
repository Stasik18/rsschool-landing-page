export const isTablet = () => window.matchMedia('(max-width: 768px)').matches

export const sliceGridItems = (items, offset, perPage = 4) => {
  return isTablet() ? items.slice(offset, offset + perPage) : items
}

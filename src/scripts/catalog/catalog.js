import '@/assets/styles/catalog.css'
import { isTablet, sliceGridItems } from './pagination'
import { CATEGORIES, MENU_ITEMS } from '../../constant/data'
import { openModal } from './modal'

const tabsList = document.querySelector('.menuTabsList')
const grid = document.querySelector('.menuGrid')
const refreshBtn = document.querySelector('.refresh')
let offset = 0

const filterCategory = (category) => {
  return MENU_ITEMS.filter((item) => item.category === category)
}

// отприсовка tab меню
tabsList.innerHTML = CATEGORIES.map(
  (cat) => `
  <li>
    <button class="menuTab ease-transition" type="button" data-category="${cat.id}">
      <span class="menuTabIcon">${cat.icon}</span>
      <span>${cat.label}</span>
    </button>
  </li>
`
).join('')

// отрисовка карточек
function renderCards(category) {
  const allCount = filterCategory(category)
  const items = sliceGridItems(allCount, offset)

  const shouldHideRefresh = allCount.length <= 4
  refreshBtn.hidden = shouldHideRefresh

  grid.innerHTML = items
    .map(
      (item) => `
      <li data-id="${item.id}" class="menuCard ease-transition">
        <img class="menuCardImage" src="${item.image}" alt="${item.alt}">
        <h3 class="menuCardTitle">${item.title}</h3>
        <p class="menuCardDesc">${item.description}</p>
        <span class="menuCardPrice">$${item.price.toFixed(2)}</span>
      </li>
    `
    )
    .join('')
}

// дефолт
const saved = localStorage.getItem('category')
const category = saved || 'coffee'

tabsList.querySelectorAll('.menuTab').forEach((tab) => {
  tab.classList.toggle('menuTabActive', tab.dataset.category === category)
})
renderCards(category)

// переключение подразделов
tabsList.addEventListener('click', (e) => {
  const btn = e.target.closest('.menuTab')
  if (!btn) return

  tabsList
    .querySelectorAll('.menuTab')
    .forEach((b) => b.classList.remove('menuTabActive'))

  btn.classList.add('menuTabActive')
  localStorage.setItem('category', btn.dataset.category)

  offset = 0
  renderCards(btn.dataset.category)
})

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.menuCard')
  if (!card) return
  const item = MENU_ITEMS.find((i) => i.id === Number(card.dataset.id))
  openModal(item)
})

if (refreshBtn) {
  refreshBtn.addEventListener('click', () => {
    if (!isTablet()) return

    const all = filterCategory(localStorage.getItem('category') || 'coffee')
    offset = (offset + 4) % all.length
    renderCards(localStorage.getItem('category') || 'coffee')
  })

  window.addEventListener('resize', () => {
    renderCards(localStorage.getItem('category') || 'coffee')
  })
}

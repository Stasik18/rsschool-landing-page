import '@/assets/styles/catalog.css'
import {
  getVisibleItems,
  shouldShowRefresh,
  createResizeHandler,
} from './pagination'
import { CATEGORIES, MENU_ITEMS } from '../../constant/data'
import { openModal } from './modal'

const tabsList = document.querySelector('.menuTabsList')
const grid = document.querySelector('.menuGrid')
const refreshBtn = document.querySelector('.refresh')
let isExpanded = false
let currentCategory = 'coffee'

const filterCategory = (category) => {
  return MENU_ITEMS.filter((item) => item.category === category)
}

// отприсовка tab меню
tabsList.innerHTML = CATEGORIES.map(
  (cat) => `
  <li>
    <button class="menuTab ease-transition" type="button" data-category="${cat.id}">
      <span class="menuTabIcon ease-transition">${cat.icon}</span>
      <span>${cat.label}</span>
    </button>
  </li>
`
).join('')

// отрисовка карточек
function renderCards(category) {
  const allCount = filterCategory(category)

  const items = getVisibleItems(allCount, isExpanded)

  refreshBtn.hidden = !shouldShowRefresh(allCount, isExpanded)

  grid.innerHTML = items
    .map(
      (item) => `
      <li data-id="${item.id}" class="menuCard ease-transition">
        <img class="menuCardImage" src="${item.image}" alt="${item.alt}">
        <h2 class="menuCardTitle">${item.title}</h2>
        <p class="menuCardDesc ease-transition">${item.description}</p>
        <span class="menuCardPrice">$${item.price.toFixed(2)}</span>
      </li>
    `
    )
    .join('')
}

// первое открытие
tabsList.querySelectorAll('.menuTab').forEach((tab) => {
  tab.classList.toggle(
    'menuTabActive',
    tab.dataset.category === currentCategory
  )
})
renderCards(currentCategory)

// переключение подразделов
tabsList.addEventListener('click', (e) => {
  const btn = e.target.closest('.menuTab')
  if (!btn) return

  tabsList
    .querySelectorAll('.menuTab')
    .forEach((b) => b.classList.remove('menuTabActive'))

  btn.classList.add('menuTabActive')
  currentCategory = btn.dataset.category
  isExpanded = false

  renderCards(btn.dataset.category)
})
// открытие модалки
grid.addEventListener('click', (e) => {
  const card = e.target.closest('.menuCard')
  if (!card) return
  const item = MENU_ITEMS.find((i) => i.id === Number(card.dataset.id))
  openModal(item)
})

// показать ещё + задержка к ресайзу
if (refreshBtn) {
  refreshBtn.addEventListener('click', () => {
    isExpanded = true
    renderCards(currentCategory)
  })
  window.addEventListener(
    'resize',
    createResizeHandler(() => renderCards(currentCategory))
  )
}

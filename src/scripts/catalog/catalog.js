import '@/assets/styles/catalog.css'
import '@/assets/styles/global.css'
import { categories, menuItems } from '../../constant/data'

const tabsList = document.querySelector('.menuTabsList')
const grid = document.querySelector('.menuGrid')

tabsList.innerHTML = categories
  .map(
    (cat) => `
  <li>
    <button class="menuTab ease-transition" type="button" data-category="${cat.id}">
      <span class="menuTabIcon">${cat.icon}</span>
      <span>${cat.label}</span>
    </button>
  </li>
`
  )
  .join('')

function renderCards(category) {
  grid.innerHTML = menuItems
    .filter((item) => item.category === category)
    .map(
      (item) => `
      <li class="menuCard ease-transition">
        <img class="menuCardImage" src="${item.image}" alt="${item.alt}">
        <h3 class="menuCardTitle">${item.title}</h3>
        <p class="menuCardDesc">${item.description}</p>
        <span class="menuCardPrice">$${item.price.toFixed(2)}</span>
      </li>
    `
    )
    .join('')
}

renderCards('coffee')
tabsList.querySelector('.menuTab').classList.add('menuTabActive')

tabsList.addEventListener('click', (e) => {
  const btn = e.target.closest('.menuTab')
  if (!btn) return

  tabsList
    .querySelectorAll('.menuTab')
    .forEach((b) => b.classList.remove('menuTabActive'))
  btn.classList.add('menuTabActive')

  renderCards(btn.dataset.category)
})

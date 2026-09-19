import '@/assets/styles/catalog.css'

import { categories, menuItems } from '../../constant/data'

const tabsList = document.querySelector('.menuTabsList')
const grid = document.querySelector('.menuGrid')
const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modalOverlay')
const modalBody = document.querySelector('.modalBody')

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

const openModal = () => {
  modal.hidden = false
  modal.inert = false
  modal.classList.add('isOpen')
  modalOverlay.classList.add('isOpenOverlay')
}
const closedModal = () => {
  modal.hidden = true
  modal.inert = true
  modal.classList.remove('isOpen')
  modalOverlay.classList.remove('isOpenOverlay')
}

grid.addEventListener('click', (e) => {
  const currentCard = e.target.closest('.menuCard')
  if (!currentCard) return
  console.log(currentCard)
  const id = Number(currentCard.dataset.id)
  const item = menuItems.find((item) => item.id === id)
  modalBody.innerHTML = `
   <div class="modalCard">
                    <img class="modalCardImage" src=${item.image} alt=${item.alt}>

                    <div class="modalCardInfo">
                        <div class="modalCardHead">
                            <h3 class="modalCardTitle">${item.title}</h3>
                            <p class="modalCardDesc">${item.description}</p>
                        </div>

                        <div class="modalCardGroup ">
                            <span class="modalCardLabel">Size</span>
                            <ul class="modalCardOptions">
                                <li>
                                    <button class="modalOption ease-transition modalOptionActive" type="button">
                                        <span class="modalOptionKey">S</span>200 ml</button>
                                </li>
                                <li>
                                    <button class="modalOption ease-transition" type="button">
                                        <span class="modalOptionKey">M</span>300 ml</button>
                                </li>
                                <li>
                                    <button class="modalOption ease-transition" type="button">
                                        <span class="modalOptionKey">L</span>400 ml</button>
                                </li>
                            </ul>
                        </div>

                        <div class="modalCardGroup">
                            <span class="modalCardLabel" ">Additives</span>
                            <ul class="modalCardOptions">
                                <li><button class="modalOption ease-transition modalOptionActive" type="button">
                                        <span class="modalOptionKey">1</span>Sugar</button>
                                </li>
                                <li><button class="modalOption ease-transition" type="button">
                                        <span class="modalOptionKey">2</span>Cinnamon</button>
                                </li>
                                <li><button class="modalOption ease-transition" type="button">
                                        <span class="modalOptionKey">3</span>Syrup</button>
                                </li>
                            </ul>
                        </div>

                        <div class="modalCardTotal">
                            <span>Total:</span>
                            <span class="modalCardPrice">${item.price.toFixed(2)}</span>
                        </div>

                        <p class="modalCardNote">
                            <svg class="modalCardNoteIcon" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
                                    fill="currentColor" />
                            </svg>
                            The cost is not final. Download our mobile app to see the final price and place your order.
                            Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
                        </p>

                        <button class="modalClose ease-transition" type="button">Close</button>
                    </div>
                </div>
  `

  openModal()
})

modal.addEventListener('click', (e) => {
  if (e.target.closest('.modalClose') || e.target.closest('.modalOverlay')) {
    closedModal()
    return
  }

  const sizeBtn = e.target.closest('.modalOption')
  const group = sizeBtn.closest('.modalCardOptions')
  console.log(sizeBtn)
  if (sizeBtn) {
    group
      .closest('.modalCardOptions')
      .querySelectorAll('.modalOption')
      .forEach((elem) => elem.classList.remove('modalOptionActive'))

    sizeBtn.classList.add('modalOptionActive')
  }
})

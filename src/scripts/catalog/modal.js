import { MODAL_OPTIONS } from '../../constant/modalOptions'

const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modalOverlay')
const modalBody = document.querySelector('.modalBody')

let currentPrice = 0
let currentConfig = null
let selectedSize = null
let selectedAdditives = new Set()

const calcTotal = () => {
  const size = currentConfig.sizes.find((s) => s.key === selectedSize)
  let total = currentPrice * (size?.multiplier ?? 1)
  currentConfig.additives.forEach((add) => {
    if (selectedAdditives.has(add.key)) total += add.price
  })
  return total
}

const updateTotal = () => {
  const priceEl = modalBody.querySelector('.modalCardPrice')
  if (priceEl) priceEl.textContent = calcTotal().toFixed(2)
}

const showModal = () => {
  modal.hidden = false
  modal.inert = false
  modal.classList.add('isOpen')
  modalOverlay.classList.add('isOpenOverlay')
  document.body.style.overflow = 'hidden'
}

const hideModal = () => {
  modal.hidden = true
  modal.inert = true
  modal.classList.remove('isOpen')
  modalOverlay.classList.remove('isOpenOverlay')
  document.body.style.overflow = ''
}

const renderModalContent = (item) => {
  const config = MODAL_OPTIONS[item.category]
  currentConfig = config
  currentPrice = item.price

  // дефолт: первая опция и первая добавка
  selectedSize = config.sizes[0].key
  selectedAdditives = new Set([config.additives[0].key])

  const sizesHTML = config.sizes
    .map(
      (s, i) => `
      <li>
        <button class="modalOption ease-transition ${i === 0 ? 'modalOptionActive' : ''}"
          type="button" data-size="${s.key}">
          <span class="modalOptionKey">${s.key}</span>${s.label}
        </button>
      </li>
    `
    )
    .join('')

  const additivesHTML = config.additives
    .map(
      (a, i) => `
      <li>
        <button class="modalOption ease-transition ${i === 0 ? 'modalOptionActive' : ''}"
          type="button" data-additive="${a.key}">
          <span class="modalOptionKey">${i + 1}</span>${a.label}
        </button>
      </li>
    `
    )
    .join('')

  modalBody.innerHTML = `
    <div class="modalCard">
       <div class="modalCardImageWrapper">
  <img class="modalCardImage" src="${item.image}" alt="${item.alt}" width="310" height="310">
  </div>

      <div class="modalCardInfo">
        <div class="modalCardHead">
          <h3 class="modalCardTitle">${item.title}</h3>
          <p class="modalCardDesc">${item.description}</p>
        </div>

        <div class="modalCardGroup">
          <span class="modalCardLabel">${config.sizeLabel}</span>
          <ul class="modalCardOptions">${sizesHTML}</ul>
        </div>

        <div class="modalCardGroup">
          <span class="modalCardLabel">${config.additivesLabel}</span>
          <ul class="modalCardOptions">${additivesHTML}</ul>
        </div>

        <div class="modalCardTotal">
          <span>Total:</span>
          <span class="modalCardPrice">${calcTotal().toFixed(2)}</span>
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
}

export const openModal = (item) => {
  renderModalContent(item)
  showModal()
}

modal.addEventListener('click', (e) => {
  if (e.target.closest('.modalClose') || e.target.closest('.modalOverlay')) {
    hideModal()
    return
  }

  // Size — радио-поведение
  const sizeBtn = e.target.closest('[data-size]')
  if (sizeBtn) {
    selectedSize = sizeBtn.dataset.size
    sizeBtn
      .closest('.modalCardOptions')
      .querySelectorAll('[data-size]')
      .forEach((el) => el.classList.remove('modalOptionActive'))
    sizeBtn.classList.add('modalOptionActive')
    updateTotal()
    return
  }

  // Additives — мультивыбор
  const additiveBtn = e.target.closest('[data-additive]')
  if (additiveBtn) {
    const key = additiveBtn.dataset.additive
    if (selectedAdditives.has(key)) {
      selectedAdditives.delete(key)
      additiveBtn.classList.remove('modalOptionActive')
    } else {
      selectedAdditives.add(key)
      additiveBtn.classList.add('modalOptionActive')
    }
    updateTotal()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('isOpen')) {
    hideModal()
  }
})

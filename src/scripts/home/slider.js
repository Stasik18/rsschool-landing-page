import { SLIDES } from '../../constant/data'

const sliderTrack = document.querySelector('.sliderTrack')
const sliderButtonPrev = document.querySelector('.sliderButtonPrev')
const sliderButtonNext = document.querySelector('.sliderButtonNext')
const slideList = document.querySelector('.slideList')
const lineList = document.querySelector('.lineList')
let currentIndex = 0
const total = SLIDES.length
let startX = 0

slideList.innerHTML = SLIDES.map(
  (item) => `  <article class="slide ">
                <img class="slidePictures" width="480" height="480" src="${item.image}"
                  alt="${item.alt}">
                <div class="slideInfo">
                  <h3 class="slideInfoHeader">${item.title}</h3>
                  <p class="slideInfoAbout">${item.description}</p>
                  <p class="slideInfoPrice">$${item.price.toFixed(2)}</p>
                </div>

              </article>`
).join('')

lineList.innerHTML = SLIDES.map(
  (_, index) =>
    `<li><button class="line ease-transition" data-index="${index}"></button></li>`
).join('')

lineList.querySelector('.line')?.classList.add('active')

const goToSlide = (index) => {
  if (index < 0) index = total - 1
  if (index >= total) index = 0
  currentIndex = index
  slideList.style.transform = `translateX(-${index * 100}%)`

  lineList.querySelectorAll('.line').forEach((elem) => {
    elem.classList.remove('active')
    elem.dataset.index === index
  })

  lineList.querySelectorAll('.line').forEach((line) => {
    line.classList.toggle('active', Number(line.dataset.index) === index)
  })
}

sliderButtonNext.addEventListener('click', () => goToSlide(currentIndex + 1))
sliderButtonPrev.addEventListener('click', () => goToSlide(currentIndex - 1))

lineList.addEventListener('click', (e) => {
  const line = e.target.closest('.line')
  if (!line) return
  goToSlide(Number(line.dataset.index))
})

sliderTrack.addEventListener('pointerdown', (e) => {
  startX = e.clientX
})

sliderTrack.addEventListener('pointerup', (e) => {
  const isSwipe = e.clientX - startX

  if (isSwipe < -50) goToSlide(currentIndex + 1)
  if (isSwipe > 50) goToSlide(currentIndex - 1)
})

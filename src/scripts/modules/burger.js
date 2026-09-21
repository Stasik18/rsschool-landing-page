const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobileMenu')

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('isOpen')
  mobileMenu.classList.toggle('isOpen', isOpen)
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

mobileMenu.addEventListener('click', (e) => {
  if (
    e.target.closest('.mobileMenuLink') ||
    e.target.closest('.mobileMenuButton')
  ) {
    burger.classList.remove('isOpen')
    mobileMenu.classList.remove('isOpen')
    document.body.style.overflow = ''
  }
})

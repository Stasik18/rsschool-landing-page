const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobileMenu')

if (burger && mobileMenu) {
  const openMenu = () => {
    burger.classList.add('isOpen')
    mobileMenu.classList.add('isOpen')
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    burger.classList.remove('isOpen')
    mobileMenu.classList.remove('isOpen')
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    if (burger.classList.contains('isOpen')) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  burger.addEventListener('click', toggleMenu)

  mobileMenu.addEventListener('click', (e) => {
    if (
      e.target.closest('.mobileMenuLink') ||
      e.target.closest('.mobileMenuButton')
    ) {
      closeMenu()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burger.classList.contains('isOpen')) {
      closeMenu()
    }
  })

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 769px)').matches) {
      closeMenu()
    }
  })
}

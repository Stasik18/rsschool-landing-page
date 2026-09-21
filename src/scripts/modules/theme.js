const themeSwitcher = document.querySelector('.themeSwitcher')

themeSwitcher.addEventListener('click', () => {
  document.documentElement.dataset.theme === 'light'
    ? (document.documentElement.dataset.theme = 'dark')
    : (document.documentElement.dataset.theme = 'light')

  localStorage.setItem('theme', document.documentElement.dataset.theme)
})

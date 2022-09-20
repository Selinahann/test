function font () {
  const baseSize = 50
  const baseWidth = 375
  function setFontSize () {
    const windowWidth = window.innerWidth > 750 ? 750 : window.innerWidth
    document.querySelector('html').style.fontSize = windowWidth / baseWidth * baseSize + 'px'
  }
  setFontSize()
  window.addEventListener('resize', function () {
    setFontSize()
  })
}
font()

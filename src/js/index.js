const cards = document.querySelectorAll('.card')

cards.forEach(card => {
  card.addEventListener('click', ev => {
    const target = ev.currentTarget
    if (!target.classList.contains('selected')) {
      const pastSelected = document.querySelector('.selected')
      pastSelected.classList.remove('selected')
      target.classList.add('selected')
    }
  })
})
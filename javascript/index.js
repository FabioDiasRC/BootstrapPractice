const images = document.querySelectorAll('.project-box')
const imagesCount = images.length

const btn = document.querySelectorAll('.filter-btn')
const btnCount = btn.length
btn.forEach(element => element.addEventListener('click', apply))

function hiden(id) {
  if (id === 'btn__all') {
    for (var j = 0; j <= imagesCount; j++) {
      images[j].classList.remove('hide')
    }
  } else if (id === 'btn__men') {
    for (var j = 0; j <= imagesCount; j++) {
      images[j].classList.add('hide')
      images[0].classList.remove('hide')
      images[1].classList.remove('hide')
    }
  } else if (id === 'btn__crazy') {
    for (var j = 0; j <= imagesCount; j++) {
      images[j].classList.add('hide')
      images[2].classList.remove('hide')
      console.log(images[2].id)
      images[3].classList.remove('hide')
    }
  } else {
    for (var j = 0; j <= imagesCount; j++) {
      images[j].classList.add('hide')
      images[4].classList.remove('hide')
      images[5].classList.remove('hide')
    }
  }
}

function apply() {
  for (var i = 0; i <= btnCount; i += 1) {
    btn[i].classList.remove('active')
    var base = document.getElementById(this.id)
    base.classList.add('active')
    hiden(this.id)
  }
}
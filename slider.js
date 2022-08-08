// slider

const next = document.querySelector("#next")
const previous = document.querySelector("#previous")
const slideIndicators = [...document.querySelectorAll('#showSlide1, #showSlide2, #showSlide3')]
const slides = [...document.querySelectorAll('#slide1, #slide2, #slide3')]


const changeSlide = (index) => {

    slides.forEach((slide) => {
        slide.classList.remove('activeSlide')
    })
    slides[index].classList.add('activeSlide')

    slideIndicators.forEach((ind) => {
        ind.classList.remove('activeIndicator')
    })
    slideIndicators[index].classList.add('activeIndicator')
}


let slidesIndex = 0;

const increaseIndex = () => {
    slidesIndex++;
    if (slidesIndex === slides.length) {
        slidesIndex = 0
    }
    changeSlide(slidesIndex)
}

let indexIncreaser = setInterval(increaseIndex, 3000)

const decreaseIndex = () => {
    slidesIndex--;
    
    if (slidesIndex < 0) {
        slidesIndex = slides.length - 1
    }
    changeSlide(slidesIndex)
}


const showNextSlide = () => {
clearInterval(indexIncreaser)
increaseIndex()
indexIncreaser = setInterval(increaseIndex, 3000)
}

const showPreviousSlide = () => {
    clearInterval(indexIncreaser)
    decreaseIndex()
    indexIncreaser = setInterval(increaseIndex, 3000)
}


next.addEventListener('click', showNextSlide)
previous.addEventListener('click', showPreviousSlide)

const chooseSlide = (e) => {
    clearInterval(indexIncreaser)
changeSlide(e.target.dataset.index)
slidesIndex = e.target.dataset.index;
indexIncreaser = setInterval(increaseIndex, 3000)
}

slideIndicators.forEach(ind => ind.addEventListener('click', chooseSlide))
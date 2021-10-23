let slidePosition = 0
const slides = document.querySelectorAll('.carousel__item')
const totalSlides = slides.length;

const next = document.querySelector('#carousel__button--next')
const prev = document.querySelector('#carousel__button--prev')

next.addEventListener('click', ()=>{
    moveToNextSlide()
})

prev.addEventListener('click', ()=>{
    moveToPreviousSlide()
})

//functions
function moveToNextSlide(){
    if(slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++
    }
    updateSlidePosition()
}

function moveToPreviousSlide(){
    if(slidePosition === 0){
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--
    }
    updateSlidePosition()
}

function updateSlidePosition(num){
    for (let slide of slides){
        slide.classList.remove('carousel__item--visible')
        slide.classList.add('carousel__item--hidden')
    }
    slides[slidePosition].classList.add('carousel__item--visible')
}


//image selector
const images = document.querySelectorAll('.small-img')
images.forEach((image, index)=>{
    image.addEventListener('click', ()=>{
        images.forEach(image =>{
            image.firstElementChild.classList.remove('img-selected')
        })
        images[index].firstElementChild.classList.add('img-selected')
        slides.forEach(slide=>{
            slide.classList.remove('carousel__item--visible')
        })
        slides[index].classList.add('carousel__item--visible')
    })
})
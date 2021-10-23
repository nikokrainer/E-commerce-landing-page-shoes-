//--click change slide

//declaration
const imagePopup = document.querySelector('.imagePopup-container')
const smallImages = document.querySelectorAll('.small-image')
const bigImages = document.querySelectorAll('.big-image')
const cart = document.querySelector('.shoppingCart')
let currentIndex = 0


//event listeners
document.querySelector('.carousel').addEventListener('click', ()=>{
    if (cart.classList.contains('hidden')){
        imagePopup.classList.remove('hidden')
    }
})

document.querySelector('.close').addEventListener('click', ()=>{
    imagePopup.classList.add('hidden')
})

//functions
smallImages.forEach((image,index) => {
    image.addEventListener('click', ()=>{
        bigImages.forEach(image => {
            image.classList.remove('big-image-selected')
        })
        smallImages.forEach(image => {
            image.classList.remove('small-image-selected')
        })
        bigImages[index].classList.add('big-image-selected')
        smallImages[index].classList.add('small-image-selected')

        currentIndex = index //! this is adde after carousel slider section in order to work in addition to image selection
    })
})

//---carousel slider---

const arrowLeft = document.querySelector('.imagePopup__arrow-left')
const arrowRight = document.querySelector('.imagePopup__arrow-right')


//event listener
arrowLeft.addEventListener('click', ()=>{
    currentPosition(-1)
})

arrowRight.addEventListener('click', ()=>{
    currentPosition(1)
})



function currentPosition(num){

    if (currentIndex == 0 && num < 0){
        currentIndex = bigImages.length - 1
    } else if(currentIndex == bigImages.length - 1 && num > 0){
        currentIndex = 0
    } else if (num === 1){
        currentIndex++
    } else{
        currentIndex--
    }



    bigImages.forEach((image,index) => {
            image.classList.remove('big-image-selected') 
    })
    smallImages.forEach(image =>{
        image.classList.remove('small-image-selected')
    })

    bigImages[currentIndex].classList.add('big-image-selected')
    smallImages[currentIndex].classList.add('small-image-selected')
    
}




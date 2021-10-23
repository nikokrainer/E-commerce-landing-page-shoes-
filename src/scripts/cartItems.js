//notation
let num = document.querySelector('.number')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let cartNumber = document.querySelector('.cartNumber')

let itemCount = 0

const addToCart = document.querySelector('.add-to-cart')
const cartImg = document.querySelector('.cartImg')
const cart = document.querySelector('.shoppingCart')
let priceTimes = document.querySelector('.priceTimes')
const cartItemContainer = document.querySelector('.shoppingCart__item-container')
let totalPrice = document.querySelector('.total')
const thrash = document.querySelector('.thrash')

//event listeners
plus.addEventListener('click', ()=>{
    itemCount++
    num.innerText = itemCount
})

minus.addEventListener('click', ()=>{
    if(itemCount > 0){
        itemCount--
    num.innerText = itemCount
    }
})

cartImg.addEventListener('click', ()=>{
    if (cart.classList.contains('hidden')){
        cart.classList.remove('hidden')
    } else{
        cart.classList.add('hidden')
    }
})

addToCart.addEventListener('click', ()=>{
    addedToCart(itemCount)
    itemCount = 0
    num.innerText = 0
})

thrash.addEventListener('click', ()=>{
    cartItemContainer.classList.add('hidden')
    cartNumber.classList.add('hidden')
    itemCount = 0
    cartNumber.innerText = 0
})

//functions
function addedToCart(itemCount){
    if (itemCount <= 0){
        return
    } else{
        cartItemContainer.classList.remove('hidden')
        cartNumber.classList.remove('hidden')
        priceTimes.innerText = itemCount
        cartNumber.innerText = itemCount
        let priceMultiply = itemCount * 125
        totalPrice.innerText = ('$' + priceMultiply + '.00')
    }
}





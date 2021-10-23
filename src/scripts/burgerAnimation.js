const burger = document.querySelector('.nav__hamburgerMenu')
const sidebarMenu = document.querySelector('.sidebarMenu')
const sidebarMenuBackground = document.querySelector('.sidebarMenuBackground')
const nav = document.querySelector('.nav')

burger.addEventListener('click', () => {
    showSidebarMenu()
})

function showSidebarMenu(){
    if (nav.classList.contains('open')){
        sidebarMenu.classList.add('slide-out')
        sidebarMenu.classList.remove('slide-in')

        sidebarMenuBackground.classList.add('fade-out')
        sidebarMenuBackground.classList.remove('fade-in')

        nav.classList.remove('open')
    }else{
        sidebarMenu.classList.add('slide-in')
        sidebarMenu.classList.remove('slide-out')

        sidebarMenuBackground.classList.add('fade-in')
        sidebarMenuBackground.classList.remove('fade-out')

        nav.classList.add('open')
    }

}
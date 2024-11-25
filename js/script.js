'use strict'

const burgerMenu = document.getElementById('burgerMenu')
const searchInHeader = document.getElementById('searchInHeader')
const searchPlaceInHeader = document.getElementById('searchPlaceInHeader')
const inputInSearchPlace = document.getElementById('inputInSearchPlace')
const darkBackground = document.getElementById('darkBackground')
const crossInNavigation = document.getElementById('navigationCross')
const crossInSearchPlace = document.getElementById('crossInSearchPlace')
const body = document.querySelector('BODY')
const naviganion = document.querySelector('NAV')
const anchors = document.querySelectorAll('a[href*="#"]')

function turnOnHiddenModul() {
    darkBackground.classList.remove('hidden')
    body.classList.add('lockScrolling')
}
function turnOffHiddenModul() {
    darkBackground.classList.add('hidden')
    body.classList.remove('lockScrolling')
}
function openNavigation() { // открытие бургер меню
    turnOnHiddenModul()
    naviganion.classList.add('header__nav--active')
}
function closeNavigation() { // закрытие бургер меню
    turnOffHiddenModul()
    naviganion.classList.remove('header__nav--active')
}
function openSearchInHeader() { // открытие строки поиска
    turnOnHiddenModul()
    searchPlaceInHeader.classList.remove('hidden')
}
function closeSearchInHeader() { // закрытие строки поиска
    turnOffHiddenModul()
    searchPlaceInHeader.classList.add('hidden')
}



burgerMenu.addEventListener('click', function() { 
    openNavigation()
    darkBackground.addEventListener('click', function() {
        closeNavigation()
    })
})
crossInNavigation.addEventListener('click', function() { 
    closeNavigation()
    darkBackground.removeEventListener('click', function() {
        closeNavigation()
    })
})
searchInHeader.addEventListener('click', function() { 
    openSearchInHeader()
    darkBackground.addEventListener('click', function() {
        closeSearchInHeader() 
    })
})
crossInSearchPlace.addEventListener('click', function() { 
    closeSearchInHeader()
    darkBackground.removeEventListener('click', function() {
        closeSearchInHeader() 
    })
})

anchors.forEach((anchor) => { // плавный скроллинг
    anchor.addEventListener('click', function(event) {
        event.preventDefault()
        if (anchor.getAttribute('href') === '#USACities' || anchor.getAttribute('href') === '#photo') {
            closeNavigation()
        }
        const blockID = anchor.getAttribute('href')
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
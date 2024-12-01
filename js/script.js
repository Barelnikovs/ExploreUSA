'use strict'

const inputInSearchPlace = document.getElementById('inputInSearchPlace')

/* вспомогательные функции */
const body = document.querySelector('BODY')
const naviganion = document.querySelector('NAV')
const darkBackground = document.getElementById('darkBackground')
const searchPlaceInHeader = document.getElementById('searchPlaceInHeader')

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
    naviganion.classList.add('navigation--active')
}
function closeNavigation() { // закрытие бургер меню
    turnOffHiddenModul()
    naviganion.classList.remove('navigation--active')
}
function openSearchInHeader() { // открытие строки поиска
    turnOnHiddenModul()
    searchPlaceInHeader.classList.remove('hidden')
}
function closeSearchInHeader() { // закрытие строки поиска
    turnOffHiddenModul()
    searchPlaceInHeader.classList.add('hidden')
}


/* открытие и закрытие меню бургер и поисковой строки */
const burgerMenu = document.getElementById('burgerMenu')
const crossInNavigation = document.getElementById('navigationCross')
const searchInHeader = document.getElementById('searchInHeader')
const crossInSearchPlace = document.getElementById('crossInSearchPlace')

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

/* плавный скроллинг */
const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach((anchor) => { 
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

/* Включает и выключает блок со странами в nav в зависимости от ширины видимого пространства */
const citiesInNavigation = document.querySelector('#cities-navigation')
function toggleCitiesInNavigation() {
    if (window.innerWidth >= 1200 || window.innerWidth < 1024) {
        citiesInNavigation.classList.add('hidden')
    } else if (window.innerWidth >= 1024 && window.innerWidth < 1200) {
        citiesInNavigation.classList.remove('hidden')
    }
}
toggleCitiesInNavigation()
window.addEventListener('resize', toggleCitiesInNavigation)

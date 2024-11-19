'use strict'

const burgerMenu = document.getElementById('burgerMenu')
const searchInHeader = document.getElementById('searchInHeader')
const searchPlaceInHeader = document.getElementById('searchPlaceInHeader')
const inputInSearchPlace = document.getElementById('inputInSearchPlace')
const inputInBanner = document.getElementById('inputInBanner')
const darkBackground = document.getElementById('darkBackground')
const crossInNavigation = document.getElementById('navigationCross')
const crossInSearchPlace = document.getElementById('crossInSearchPlace')
const body = document.querySelector('BODY')
const naviganion = document.querySelector('NAV')

function turnOnHiddenModul(elem) {
    darkBackground.classList.remove('hidden')
    body.classList.add('lockScrolling')
}
function turnOffHiddenModul() {
    darkBackground.classList.add('hidden')
    body.classList.remove('lockScrolling')
}

function openNavigation() {
    turnOnHiddenModul()
    naviganion.classList.add('header__nav--active')
}
function closeNavigation() {
    turnOffHiddenModul()
    naviganion.classList.remove('header__nav--active')
}
function openSearchInHeader() {
    turnOnHiddenModul()
    searchPlaceInHeader.classList.remove('hidden')
}
function closeSearchInHeader() {
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
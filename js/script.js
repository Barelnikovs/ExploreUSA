'use strict'

const crossInHeader = document.querySelector('#crossInHeader')

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
    inputInHeader.value = ''
    resultsOfLiveSearch.classList.add('hidden')
}


/* открытие и закрытие меню бургер и поисковой строки */
const burgerMenu = document.getElementById('burgerMenu')
const crossInNavigation = document.getElementById('navigationCross')
const searchInHeader = document.getElementById('searchInHeader')
const crossInSearchPlace = document.getElementById('crossInSearchPlace')
const inputInHeader = document.querySelector('#inputInHeader')
const resultsOfLiveSearch = document.querySelector('#resultsOfLiveSearch')

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
    inputInHeader.focus()
    darkBackground.addEventListener('click', function() {
        closeSearchInHeader() 
    })
})
crossInHeader.addEventListener('click', function() { 
    closeSearchInHeader()
    darkBackground.removeEventListener('click', function() {
        closeSearchInHeader() 
    })
})

/* Живой поиск в хедере */
inputInHeader.addEventListener('input', function () {
    let val = this.value.trim().toLowerCase()
    let citiesInSearch = document.querySelectorAll('.search__city')
    let count = 0
    if (val.length >= 1) {
        citiesInSearch.forEach((city) => {
            if (city.innerText.toLowerCase().includes(val)) {
                if (count < 8) {
                    city.classList.remove('hidden')
                    count++
                } else {
                    city.classList.add('hidden')
                }
            } else {
                city.classList.add('hidden')
            }
        })
        resultsOfLiveSearch.classList.remove('hidden')
    } else {
        resultsOfLiveSearch.classList.add('hidden')
    }
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


/* Сортировка городов */
const buttonSortByPopularity = document.querySelector('#sort-popular')
const buttonSortByAlphabet = document.querySelector('#sort-alphabet')
const parantOfCities = document.querySelector('#all-cities')
const childrenCities = parantOfCities.children

buttonSortByPopularity.addEventListener('click', sortByPopularity)
function sortByPopularity() {
    buttonSortByPopularity.classList.add('sorting__popularity--active')
    buttonSortByAlphabet.classList.remove('sorting__alphabet--active')
    let citiesArray = Array.from(childrenCities);
    citiesArray.sort((a, b) => {
        return Number(a.dataset.popularity) - Number(b.dataset.popularity);
    });
    parantOfCities.innerHTML = '';
    citiesArray.forEach(city => {
        parantOfCities.appendChild(city);
    });
}
    sortByPopularity()
buttonSortByAlphabet.addEventListener('click', sortByAlphabet)
function sortByAlphabet() {
    buttonSortByPopularity.classList.remove('sorting__popularity--active')
    buttonSortByAlphabet.classList.add('sorting__alphabet--active')
    let citiesArray = Array.from(childrenCities);
    citiesArray.sort((a, b) => {
        return Number(a.dataset.alphabet) - Number(b.dataset.alphabet);
    });
    parantOfCities.innerHTML = '';
    citiesArray.forEach(city => {
        parantOfCities.appendChild(city);
    });
}

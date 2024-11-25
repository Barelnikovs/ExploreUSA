const banner = document.getElementById('banner')
const title = document.title
console.log(title)
if (title === 'Атланта штат Джорджия') {
     alert('должно работать')
}

const images = ['./image/banner/Atlanta.jpg',
     './image/banner/Boston.jpg',
      './image/banner/chicago.jpg',
       './image/banner/Dallas.jpg',
        './image/banner/Detroit.jpg',
         './image/banner/houston.jpg',
          './image/banner/LA.jpg',
           './image/banner/Las_Vegas.jpeg',
            './image/banner/Miami.jpg',
             './image/banner/Minneapolis.jpg',
              './image/banner/New_Orleans.jpg',
               './image/banner/new-york.jpg',
                './image/banner/philadelphia.jpg',
                 './image/banner/phoenix.jpg',
                  './image/banner/San_Antonio.jpg',
                   './image/banner/San_Diego.jpg',
                    './image/banner/San_Francisco.jpeg',
                     './image/banner/San_Jose.jpg',
                      './image/banner/Seattle.jpg',
                       './image/banner/Washington_DC.jpg', ]
const randomImage = Math.floor(Math.random() * images.length)

switch (title) {
     case 'Explore USA main': {
          banner.style.backgroundImage = `url(${images[randomImage]})`
          break
     }
     case 'Атланта штат Джорджия': {
          banner.style.backgroundImage = `url(.${images[0]})`
          break
     }
     case 'Бостон штат Массачусетс': {
          banner.style.backgroundImage = `url(.${images[1]})`
          break
     }
     case 'Чикаго штат Иллинойс': {
          banner.style.backgroundImage = `url(.${images[2]})`
          break
     }
     case 'Даллас штат Техас': {
          banner.style.backgroundImage = `url(.${images[3]})`
          break
     }
     case 'Детроит штат Мичиган': {
          banner.style.backgroundImage = `url(.${images[4]})`
          break
     }
     case 'Хьюстон штат Техас': {
          banner.style.backgroundImage = `url(.${images[5]})`
          break
     }
     case 'Лос Анджелес штат Калифорния': {
          banner.style.backgroundImage = `url(.${images[6]})`
          break
     }
     case 'Лас вегас штат Невада': {
          banner.style.backgroundImage = `url(.${images[7]})`
          break
     }
     case 'Майями штат Флорида': {
          banner.style.backgroundImage = `url(.${images[8]})`
          break
     }
     case 'Филадельфия штат Пенсильвания': {
          banner.style.backgroundImage = `url(.${images[12]})`
          break
     }
     case 'Миннеаполис штат Миннесота': {
          banner.style.backgroundImage = `url(.${images[9]})`
          break
     }
     case 'Новый Орлеан штат Луизиана': {
          banner.style.backgroundImage = `url(.${images[10]})`
          break
     }
     case 'Нью-Йорк штат Нью-Йорк': {
          banner.style.backgroundImage = `url(.${images[11]})`
          break
     }
     case 'Феникс штат Аризона': {
          banner.style.backgroundImage = `url(.${images[13]})`
          break
     }
     case 'Сан Антонио штат Техас': {
          banner.style.backgroundImage = `url(.${images[14]})`
          break
     }
     case 'Сан Диего штат Калифорния': {
          banner.style.backgroundImage = `url(.${images[15]})`
          break
     }
     case 'Сан Франциско штат Калифорния': {
          banner.style.backgroundImage = `url(.${images[16]})`
          break
     }
     case 'Сан Хосе штат Калифорния': {
          banner.style.backgroundImage = `url(.${images[17]})`
          break
     }
     case 'Сиэтл штат Вашингтон': {
          banner.style.backgroundImage = `url(.${images[18]})`
          break
     }
     case 'Вашингтон округ Колумбия': {
          banner.style.backgroundImage = `url(.${images[19]})`
          break
     }
}

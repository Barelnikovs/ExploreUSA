const banner = document.getElementById('banner')
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
banner.style.backgroundImage = `url(${images[randomImage]})`

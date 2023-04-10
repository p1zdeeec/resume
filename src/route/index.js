// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================

var header = {
  name: {
    firstname: 'Marian',
    lastname: 'Melets',
  },
  position: 'Junior Fullstack JS Develope',
  salary: '6000$ в місяць',
  address: 'Ukraine LVIV',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/ivan-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. 
        Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. 
        Good team player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Open-minded for new technologies, with 1 years of experience in development. 
          Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. 
          Good team player, every colleague is a friend to me.`,
      },
    },

    footer,
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS CODE & NPM',
          point: 8,
          isTop: false,
        },
        {
          name: 'GIT & Terminal',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Football',
          isMain: true,
        },
        {
          name: 'MMA',
          isMain: true,
        },
        {
          name: 'Dance',
          isMain: false,
        },
      ],
    },

    footer,
    // ↙ сюди вводимо JSON дані
  }),
    router.get('/education', function (req, res) {
      //             ↙ cюди вводимо назву файлу з сontainer
      res.render('education', {
        // ↙ сюди вводимо JSON дані
        page: {
          title: 'Resume | Education',
        },

        header,

        main: {
          educations: [
            {
              name: 'First ',
              isEnd: true,
            },
            {
              name: 'Second',
              isEnd: false,
            },
            {
              name: 'Third',
              isEnd: false,
            },
          ],

          certificates: [
            {
              name: 'One',
              id: 1,
            },
            {
              name: 'Two',
              id: 2,
            },
            {
              name: 'Three',
              id: 3,
            },
          ],
        },

        footer,
      })
    })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua/',
              about: 'Airbnb...',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Beckground verification...',
                },
                {
                  name: 'Preparing SEO ...',
                },
              ],
              stackAmount: 8,
              awardAmount: 10,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router

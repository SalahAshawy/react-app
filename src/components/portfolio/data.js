import quize from './images/qu.jpg'
import ecom from './images/dark.png'
import surv from './images/serv.png'
import todo from './images/todolist.png'
import ms from './images/mss.jpg'
import not from './images/notess.png'
import q from './images/queus.png'
import pam from './images/pamm.png'
const PORTFOLIODATA = [
  {
    id: 1,
    img: quize,
    title: 'QUIZE APP WITH API',
    description:
    'PLAIN javaScript and webAPI practising ',
    github: 'https://github.com/SalahAshawy/Quize-Application',
    demo:  'https://salahashawy.github.io/Quize-Application/',
  },
  {
    id: 2,
    img: ecom,
    title: 'DASHBOARD eCOMEERCE',
    description:
      'HTML AND CSS AND JAVASCRIPT AND FONTAWESOME design',
    github: 'https://github.com/SalahAshawy/Dashboard-E-commerce',
    demo: 'https://salahashawy.github.io/Dashboard-E-commerce/#',
  },
  {
    id: 3,
    img: surv,
    title: 'RESPONSIVE SURVEY',
    description:
      '',
    github: 'https://github.com/SalahAshawy/survey2',
    demo: 'https://salahashawy.github.io/survey2/?fav=java',
  },
  {
    id: 4,
    img: not,
    title: 'NOTES APP',
    description:
      'HANDLE NOTES IN PHONE AND DESKTOP WITH PLAIN JAVASCRIPT',
    github: 'https://github.com/SalahAshawy/Mind-Space',
    demo: 'https://salahashawy.github.io/Mind-Space/',
  },
  {
    id: 5,
    img:todo ,
    title: 'TASK MANAGER ',
    description:
      'handel tasks and todolist with resposive design ',
    github: 'https://github.com/SalahAshawy/Mind-Space',
    demo: 'https://salahashawy.github.io/Mind-Space/',
  },
  {
    id: 6,
    img: pam,
    title: 'PAMADORO TIMER',
    description:
      'APP to handel time with pamadoro technique',
    github: 'https://github.com/SalahAshawy/Mind-Space',
    demo: 'https://salahashawy.github.io/Mind-Space/',
  },
  {
    id: 7,
    img: ms,
    title: 'MIND SPACE',
    description:
      ' SIMPLY its APP to help students to focus ',
    github: 'https://github.com/SalahAshawy/Mind-Space',
    demo: 'https://salahashawy.github.io/Mind-Space/',
  },
  {
    id: 8,
    img: q,
    title: 'QUING SYSTEM ',
    description:
      ' MATHMAICAL app to deal with quenig systems and make analysis to any queu sytem you input  with php native',
    github: 'Still Updating the repo',
    demo: '',
  },
]

export function portfolioData() {
  return PORTFOLIODATA
}

export function getPortfolioId(id) {
  return PORTFOLIODATA.find((portfolio) => portfolio.id === id)
}

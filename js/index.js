/****************mouseover************* */

let h2s = document.querySelectorAll('h2')
h2s.forEach(h2   =>  {
    h2.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'purple'
    })
})

/**********************keydown************ */

let logo = document.querySelector('.intro')
    logo.addEventListener('keydown', (e) =>{
        e.target.style.backgroundColor = '#4bc3f2'
})

/*****************wheel event************** */

logo.addEventListener('wheel', (e) =>{
    e.target.style.backgroundColor = '#945687'
}) 
/*************drag/drop section***********/


/**************load section******************** */
window.onload = (event) => {
    console.log('I am not a fan')
}


/********focus section************************* */

let nav = document.querySelector('nav')


nav.addEventListener('focus', (event) =>{
        event.target.style.background = '#e3f520'
},
true
)

nav.addEventListener('blur', (event) =>{
    event.target.style.background = ''
},
true
)



/*************resize section************************* */

window.addEventListener('resize', (e) =>{
    e.target.style.backgroundColor = '#eaf75c'
})


/****************scroll section******************** */
let h4s = document.querySelectorAll('h4')
h4s.forEach(h4   =>  {
    h4.addEventListener('scroll', (e) =>{
        e.target.style.backgroundColor = '#eaf75c'
    })
})

/**************select section******************** */




/********************dblclick************* */

let firstSection = document.querySelector('.content-section')
firstSection.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = '#6ab8fc'
})

/************prevent propagation**************** */
let destination = document.querySelector('.destination')
let destH4 = document.querySelector('.destination h4')

destination.addEventListener('click', (event) =>{
    event.target.style.backgroundColor = '#18f532'
})

destH4.addEventListener('click', (event) =>{
    event.stopPropagation()
})



/***********prevent default**************** */

let navLinks = document.querySelectorAll('a')

navLinks.forEach(a   =>  {
    a.addEventListener('click', (e) =>{
        e.preventDefault()
    })
})

/*document.querySelector("a").addEventListener("click", function (event) {
    event.preventDefault();
  });*/
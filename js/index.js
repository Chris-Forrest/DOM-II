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
/*************dragging section***********/

/********************dblclick************* */

let firstSection = document.querySelector('.content-section')
firstSection.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = '#6ab8fc'
})

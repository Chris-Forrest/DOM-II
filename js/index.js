
let h2s = document.querySelectorAll('h2')
h2s.forEach(h2=>{
    h2.addEventListener('mouseover', (e) =>{
        e.target.style.backgroundColor = 'red'
    })
})

let logo = document.querySelector('.intro')
    logo.addEventListener('keydown', (e) =>{
    e.target.style.backgroundColor = 'purple'
})




//chngBackgrnClr.addEventListener('mouseover', () => {
  //  chngBackgrnClr.style.backgroundColor = 'mauve'
//})
/*chngBackgrnClr.addEventListener("mouseover", function( event ) {   
    
    event.style.color = "mauve"
})*/
//debugger

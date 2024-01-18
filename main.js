'use strict'

const imagenesDeGaleria = document.querySelector('.imagenesDeGaleria');
const punto = document.querySelectorAll('.punto');

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{
        let posicion = i
        let operacion = posicion * -5.33
        imagenesDeGaleria.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto, i )=> {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
        
    })
});


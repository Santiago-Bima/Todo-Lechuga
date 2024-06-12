var flecha_ctn=document.querySelector('#flecha')
var flecha=document.querySelector('.flecha')
var aside=document.querySelector('.menu')
var linkProd=document.querySelectorAll('.linkprod');
flecha_ctn.addEventListener('click', ()=>{
    flecha.classList.toggle('activado');
    flecha_ctn.classList.toggle('activado');
    aside.classList.toggle('activado');
})
linkProd.forEach(link=>{
    link.addEventListener('click',()=>{
        flecha.classList.toggle('activado');
        flecha_ctn.classList.toggle('activado');
        aside.classList.toggle('activado');
    })
})
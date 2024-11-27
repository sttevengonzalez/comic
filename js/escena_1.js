var ORKO = document.querySelector('.ORKO')
var oculto = document.querySelector('.oculto')
var llama = document.querySelector('.llama')
var nino = document.querySelector('.nino')
var oculto4 = document.querySelector('.oculto4')
var sound = document.querySelector ('.fuego')

ORKO.addEventListener("click", Textto)
llama.addEventListener("click", llamaa)
ORKO.addEventListener("click", animaciones)


function Textto(){
    oculto4.classList.remove('oculto4')
}
function llamaa(){
    llama.classList.add('llamaanicacion')
    sound.play()
}
function animaciones(){
    ORKO.classList.add('ORKO')
    oculto.classList.remove('oculto')
}
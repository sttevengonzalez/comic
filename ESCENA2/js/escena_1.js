var genesisescena2 = document.querySelector('.genesisescena2')
var oculto = document.querySelector('.oculto')
var llama = document.querySelector('.llama')
var oculto4 = document.querySelector('.oculto4')
var sound = document.querySelector ('.fuego')
var alaka = document.querySelector ('.alaka')

llama.addEventListener("click", llamaa)
genesisescena2.addEventListener("click", animaciones)
alaka.addEventListener("click", animaciones)

function llamaa(){
    llama.classList.add('llamaanicacion')
    sound.play()
}
function animaciones(){
    genesisescena2.classList.add('genesisanimacion')
    oculto.classList.remove('oculto')
}
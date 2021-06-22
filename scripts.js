const resultado = document.getElementById('resultado');
const cartaFrente = document.getElementById('frente');
const cartaAtras = document.getElementById('atras');

function init() {
    document.getElementById('tarot-esc-1').style.display = 'none';
    document.getElementById('tarot-esc-2').style.display = 'flex';
    setTimeout(() => {  jugar(); }, 4000);
    
}
function jugar(){
    let numero = Math.floor(Math.random() * 16 + 1);
    resultado.classList.add('fin');
    cartaFrente.setAttribute('src', `img/tarot_${numero}.png`);
    cartaAtras.setAttribute('src', `img/tarot_${numero}b.png`)

}
function resetear() {
    resultado.classList.remove('fin');
    if(resultado.classList.contains('flipando')){
        resultado.classList.remove('flipando')
    }
    cartaFrente.setAttribute('src', `img/tarot.gif`);
    setTimeout(() => {  jugar(); }, 4000);
}
resultado.addEventListener('click', () => {
    if(resultado.classList.contains('fin')) {
        resultado.classList.toggle('flipando');
    }
    
})
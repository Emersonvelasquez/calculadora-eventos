const uno = document.querySelector('#uno')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const cuatro = document.querySelector('#cuatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const siete = document.querySelector('#siete')
const ocho = document.querySelector('#ocho')
const nueve = document.querySelector('#nueve')
const cero = document.querySelector('#cero')
const marcador = document.querySelector('#marcador')
const igual = document.querySelector('#igual')
const sumar = document.querySelector('#sumar')
const dividir = document.querySelector('#dividir')
const eliminar = document.querySelector('#eliminar')
const multiplicar = document.querySelector('#multiplicar')


uno.addEventListener('click', () => {
    marcador.value += ('1')
})
dos.addEventListener('click', () => {
    marcador.value += '2'
})
tres.addEventListener('click', () => {
    marcador.value += '3'
})
cuatro.addEventListener('click', () => {
    marcador.value += '4'
})
cinco.addEventListener('click', () => {
    marcador.value += '5'
})
seis.addEventListener('click', () => {
    marcador.value += '6'
})
siete.addEventListener('click', () => {
    marcador.value += '7'
})
ocho.addEventListener('click', () => {
    marcador.value += '8'
})
nueve.addEventListener('click', () => {
    marcador.value += '9'
})
cero.addEventListener('click', () => {
    marcador.value += '0'
})
sumar.addEventListener('click', () => {
    marcador.value += '+'
})
restar.addEventListener('click', () => {
    marcador.value += '-'
})
multiplicar.addEventListener('click', () => {
    marcador.value += '*'
})
dividir.addEventListener('click', () => {
    marcador.value += '%'
})
eliminar.addEventListener('click', () => {
    marcador.value = ' '
})




let guardar = '0'

let numero = document.querySelector('#numero')
let uno = document.querySelector('#uno')
let dos = document.querySelector('#dos')
let tres = document.querySelector('#tres')
let cuatro = document.querySelector('#cuatro')
let cinco = document.querySelector('#cinco')
let seis = document.querySelector('#seis')
let siete = document.querySelector('#siete')
let ocho = document.querySelector('#ocho')
let nueve = document.querySelector('#nueve')
let cero = document.querySelector('#cero')


let marcador = document.querySelector('#marcador')
let igual = document.querySelector('#igual')
let sumar = document.querySelector('#sumar')
let dividir = document.querySelector('#dividir')
let eliminar = document.querySelector('#eliminar')
let multiplicar = document.querySelector('#multiplicar')

let = guardar = '0'

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


igual.addEventListener('click',() => {
    guardar = parseInt(numero.value) + parseInt(numero.value)
    marcador.value = (guardar)
})

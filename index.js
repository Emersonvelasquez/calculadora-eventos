let numeros = document.querySelectorAll('.numero');
let marcador = document.querySelector('#marcador')
let btnsaccion = document.querySelectorAll('.accion');
let primernumero = 0;
let eliminar = document.querySelector('.clear')
let segundonumero = 0;
let acumulador = 0;
let signo = ''
let primeravez = true;


numeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        marcador.value += btn.value
    })
})

const suma = () => {
    acumulador = acumulador + primernumero
}
const resta = () => {
    if (primeravez) {
        acumulador = primernumero - Math.abs(acumulador)
        primeravez = false;
    } else if (acumulador >= 0) {
        acumulador = Math.abs(acumulador) - primernumero
    } else {
        acumulador = acumulador - primernumero
    }
}
const multiplicador = () => {
    if (acumulador == 0) {
        acumulador = 1
        acumulador = primernumero * acumulador

    } else {
        acumulador = acumulador * primernumero
    }
}
const division = () => {
    if (acumulador == 0) {
        acumulador = primernumero + acumulador

    } else {
        acumulador = acumulador / primernumero
    }
}
const igual = () => {
    if (signo == '+') {
        segundonumero = parseInt(marcador.value)
        acumulador = acumulador + segundonumero;
        marcador.value = acumulador
    }
    else if (signo == '/') {
        segundonumero = parseInt(marcador.value)
        acumulador = acumulador / segundonumero;
        marcador.value = acumulador
    }
    else if (signo == '-') {
        segundonumero = parseInt(marcador.value)
        acumulador = acumulador - segundonumero;
        marcador.value = acumulador
        primeravez = true
    }
    else if (signo == '*') {
        segundonumero = parseInt(marcador.value)
        acumulador = acumulador * segundonumero;
        marcador.value = acumulador
        signo = '';
    }
    else if (e.target.value == 'c') {
        marcador.value = ''
    }
}


btnsaccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (marcador.value == '') {
            alert('ingrese un numero')
        }
        else if (e.target.value != '=') {
            primernumero = parseInt(marcador.value)




            switch (e.target.value) {
                case '+':
                    if (signo != '') {
                        igual();
                    } else {
                        suma();
                    }
                    break;
                case '-':
                    if (signo != '') {
                        igual();
                    } else {
                        resta();
                    }
                    break;
                case '*':
                    if (signo != '') {
                        igual();
                    } else {
                        multiplicador();
                    }
                    break;
                case '/':
                    if (signo != '') {
                        igual();
                    } else {
                        division();
                    }
            }
            marcador.value = ' '
            signo = e.target.value

        } else {
            igual()
            acumulador = 0;
        }




    })
})
eliminar.addEventListener('click', () => {
    primernumero = 0;
    segundonumero = 0;
    signo = ''
    marcador.value = ''
    acumulador = 0;
    primeravez = true
})

let numeros = document.querySelectorAll('.numero');
let marcador = document.querySelector('#marcador')
let btnsaccion = document.querySelectorAll('.accion');
let primernumero = 0;
let segundonumero = 0;
let acumulador = 0;
let signo = ''
let primeravez = true;


numeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        marcador.value += btn.value
    })
})

btnsaccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.value == '+' || e.target.value == '-' ||
            e.target.value == '/' || e.target.value == '*' ||
            e.target.value == 'clear'
        ) {
            primernumero = parseInt(marcador.value)
            switch (e.target.value) {
                case '+':
                    acumulador = acumulador + primernumero
                    break;
                case '-':
                    if (primeravez) {
                        acumulador = primernumero + Math.abs(acumulador)
                        primeravez = false;
                    } else if (acumulador >= 0) {
                        // console.log(acumulador,primernumero)
                        acumulador = Math.abs(acumulador) - primernumero
                    } else {
                        // console.log(acumulador,primernumero)
                        acumulador = acumulador - primernumero
                    }
                    break;
                case '*':
                    if (primeravez) {
                        acumulador = primernumero + acumulador
                        primeravez = false;

                    } else {
                        acumulador = acumulador * primernumero
                    }
                    break;
                case '/':
                    if (primeravez) {
                        acumulador = primernumero + acumulador
                        primeravez = false;

                    } else {
                        acumulador = acumulador / primernumero
                    }
            }
            marcador.value = ' '
            signo = e.target.value

        } else if (e.target.value == '=') {
            if (signo == '+') {
                segundonumero = parseInt(marcador.value)
                let resultado = acumulador + segundonumero;
                marcador.value = resultado
            }
            else if (signo == '/') {
                segundonumero = parseInt(marcador.value)
                let resultado = acumulador / segundonumero;
                marcador.value = resultado
                primeravez = true
            }
            else if (signo == '-') {
                segundonumero = parseInt(marcador.value)
                let resultado = acumulador - segundonumero;
                marcador.value = resultado
            }
            else if (signo == '*') {
                segundonumero = parseInt(marcador.value)
                let resultado = acumulador * segundonumero;
                marcador.value = resultado
                primeravez = true
            }
            else if (e.target.value == 'c') {
                marcador.value = ''
            }
            else {
            }
            acumulador = 0;
            resultado = 0;


        }
    })
})

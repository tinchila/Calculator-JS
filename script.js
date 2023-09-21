let operacionActual = '';
let resultado = null;


function agregar(valor) {
    const pantalla = document.getElementById('pantalla');
    const operacion = document.getElementById('operacion');
    if (resultado !== null) {
        pantalla.value = resultado;
        operacionActual = resultado;
        resultado = null;
    }
    
    pantalla.value += valor;
    operacionActual += valor;
    operacion.innerHTML = operacionActual;
}

function borrarTodo(){
    document.getElementById('pantalla').value = ''
    document.getElementById('operacion').value = ''
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    resultado = eval(valorPantalla);
    pantalla.value = resultado;
    operacionActual = valorPantalla;
    operacion.innerHTML = operacionActual;
}

function borrar(){
    document.getElementById('pantalla').value = ''
    document.getElementById('operacion').value = ''
}

function borrarNumero(){
    const valorBorrar = document.getElementById('pantalla').value
    const nuevoValor = valorBorrar.slice(0, -1);
    document.getElementById('pantalla').value = nuevoValor;
}

function porcentaje(){
    const valorPorcentaje = document.getElementById('pantalla').value
    operacionPorcentaje = valorPorcentaje / 100
    document.getElementById('pantalla').value = operacionPorcentaje
}

function divX(){
    const valorNumero = document.getElementById('pantalla').value
    operacion = (1/Math. trunc(valorNumero))
    document.getElementById('pantalla').value = operacion
}

function square(){
    const valorPantallaSqr = document.getElementById('pantalla').value
    const sqr = Math.sqrt(valorPantallaSqr)
    document.getElementById('pantalla').value = sqr
}

function potencia(){
    const valorPantallaPot = document.getElementById('pantalla').value
    const pot = Math.pow(valorPantallaPot, 2)
    document.getElementById('pantalla').value = pot
}

function changeValue(){
    const valor = document.getElementById('pantalla').value
    if (valor >= 0){
        document.getElementById('pantalla').value = valor * -1
    } else {
        document.getElementById('pantalla').value = valor * -1
    }
}

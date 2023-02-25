
var numAtual    = '';
var numAnterior = '';
var operador    = null
var visor       = document.getElementById("visor");



function addToResult(buttonValue){
    var resultInput = document.getElementById("visor");
    resultInput.value += buttonValue;
}

function clearResult(){
    visor.value = " "
    numAtual    = " "
    numAnterior = " "
}

function addNumero(num){
    numAtual += num
    visor.value = numAtual
}

function iniciaOp(op){
    numAnterior = numAtual;
    numAtual = ''
    operador = op;
}

function calcular(){
    var resultado;

    switch(operador){
        case '+':
            resultado = parseFloat(numAnterior) + parseFloat(numAtual);
            break;

        case '-':
            resultado = parseFloat(numAnterior) - parseFloat(numAtual);
            break;

        case '*':
            resultado = parseFloat(numAnterior) * parseFloat(numAtual);
            break;

        case '/':
            resultado = parseFloat(numAnterior) / parseFloat(numAtual);
            break;

        default:       
            return;
    }

    numAtual = resultado.toString();
    operador = null;
    visor.value = numAtual;
}
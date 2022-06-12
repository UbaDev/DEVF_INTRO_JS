/* document.getElementById('Result').innerHTML = "0";  */


function Valor(x) {
    document.getElementById('Result').innerHTML += x;
}

/* function limpiarZero(){
    document.getElementById('Result').innerHTML = "";
} */

function limpiarPantalla() {
    document.getElementById('Result').innerHTML = "";
}

function calcularRes() {
    var result = eval(document.getElementById('Result').innerHTML);
    document.getElementById('Result').innerHTML = result;
}






var cero = document.getElementById('cero');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var equal = document.getElementById('equal');
var limpiar = document.getElementById('Delete');




cero.addEventListener("click", function () {

    Valor(0);
})
one.addEventListener("click", function () {

    Valor(1);
})
two.addEventListener("click", function () {
    Valor(2);
})
three.addEventListener("click", function () {
    Valor(3);
})
four.addEventListener("click", function () {
    Valor(4);
})
five.addEventListener("click", function () {
    Valor(5);
})
six.addEventListener("click", function () {
    Valor(6);
})
seven.addEventListener("click", function () {
    Valor(7);
})
eight.addEventListener("click", function () {
    Valor(8);
})
nine.addEventListener("click", function () {
    Valor(9);
})
plus.addEventListener("click", function () {
    Valor("+");
})
minus.addEventListener("click", function () {
    Valor("-");
})
coma.addEventListener("click", function () {
    Valor(".");
})
multiply.addEventListener("click", function () {
    Valor("*");
})
divide.addEventListener("click", function () {
    Valor("/");
})


equal.addEventListener("click", function () {
    calcularRes();
})

limpiar.addEventListener("click", function () {
    limpiarPantalla()
})
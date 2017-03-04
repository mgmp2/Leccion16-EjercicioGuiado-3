

var peso = prompt("Ingreso peso: ");

var jupiter = peso * 0.39;
var marte   = peso * 0.38;
var saturno = peso * 0.93;
var neptuno = peso * 1.38;
var venus   = peso * 0.87;
var urano   = peso * 0.99;

var r = alert("Peso en Jupiter    :  " + jupiter.toFixed(2) +
              "\nPeso en Venus    :  " + venus.toFixed(2) +
              "\nPeso en Marte    :  " + marte.toFixed(2) +
              "\nPeso en Urano    :  " + urano.toFixed(2) +
              "\nPeso en Neptuno  :  " + neptuno.toFixed(2) +
              "\nPeso en Saturno  :  " + saturno.toFixed(2));

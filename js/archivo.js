  function pesoPlaneta1(){

  var peso = prompt("Ingreso peso: ");
  var jupiter = peso.value * 0.39;

  alert("Su Peso en Júpiter es: " + jupiter);
}

function pesoPlaneta2(){
    
    var peso = document.getElementById("peso");
    var x = prompt(" Ingrese su peso ");
    var jupiter = peso.value * 0.39;
    var venus   = peso.value * 0.87;
    var urano   = peso.value * 0.99;
    var marte   = peso.value * 0.38;
    var saturno = peso.value * 0.93;
    var neptuno = peso.value * 1.38;
        
    document.getElementById("resultado").innerHTML = "<strong>"+
                                                      "<ul>" +
                                                      "<li>" + "Peso en Jupiter: " + jupiter + "</li>" +
                                                      "<li>" + "Peso en Venus: "+ venus + "</li>" +
                                                      "<li>" + "Peso en Urano: " + urano + "</li>" +
                                                      "<li>" + "Peso en Marte: "+marte + "</li>"+
                                                      "<li>" + "Peso en Saturno: "+saturno + "</li>"+
                                                      "<li>" + "Peso en Neptuno: "+neptuno + "</li>"+
                                                      "</strong>";
}


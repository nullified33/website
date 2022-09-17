function add() {
    var result =
     Number(document.getElementById("n1").value) +
     Number(document.getElementById("n2").value)+
     Number(document.getElementById("n3").value);
  document.getElementById("answer").innerHTML=result;
  }
  
   function subtract() {
    var result =
     Number(document.getElementById("n1").value) -
     Number(document.getElementById("n2").value) -
     Number(document.getElementById("n3").value);
  document.getElementById("answer").innerHTML=result
  }
  
   function multiply() {
    var result =
     Number(document.getElementById("n1").value) *
     Number(document.getElementById("n2").value) 
  document.getElementById("answer").innerHTML=result;
  }
  
   function division() {
    var result =
     Number(document.getElementById("n1").value) /
     Number(document.getElementById("n2").value) 
  document.getElementById("answer").innerHTML=result;
  }
  
   function modulus() {
    var result =
     Number(document.getElementById("n1").value) %
     Number(document.getElementById("n2").value) 
  document.getElementById("answer").innerHTML=result;
  }
  
  // Partially redundant 
   function perimSq() {
    var result =
     Number(document.getElementById("n1").value) *
     Number(4);
  document.getElementById("answer").innerHTML=result;
  }
  
  // Partially redundant
   function areaSq() {
    var result =
     Number(document.getElementById("n1").value) *
     Number(document.getElementById("n1").value);
  document.getElementById("answer").innerHTML=result;
  }
  
   function perimRect() {
    var result =
     (Number(document.getElementById("n1").value) +
     Number(document.getElementById("n2").value))*
     Number(2);
  document.getElementById("answer").innerHTML =result;
  }
  
  // Redundant
   function areaRect() {
    var result =
     Number(document.getElementById("n1").value) *
     Number(document.getElementById("n2").value);
  document.getElementById("answer").innerHTML =result;
  }
  
   function areaTri() {
   var result =
    (Number(document.getElementById("n1").value) *
    Number(document.getElementById("n2").value))/
    Number(2);
  document.getElementById("answer").innerHTML =result;
  }
  
   function perimTri() {
   var result =
    Number(document.getElementById("n1").value) +
    Number(document.getElementById("n2").value)+
    Number(document.getElementById("n3").value)
    Number(2);
  document.getElementById("answer").innerHTML =result;
  }

  function exponent() {
   var result =
   Math.pow(Number(document.getElementById("n1").value),
    Number(document.getElementById("n2").value))
 document.getElementById("answer").innerHTML=result;
 }


function onee(){
  var disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerText = disp + 1;
  var dispp1 =document.getElementById('p1').innerText;
  document.getElementById('p1').innerText = dispp1 + 1;
  var plo = document.getElementById('pl').innerHTML;
  document.getElementById('pl').innerText = plo + 1;

}
function two(){
  var disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerText = disp + 2;
  var dispp2 =document.getElementById('p2').innerText;
  document.getElementById('p2').innerText = dispp2 + 2;
}
function three(){
  var disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerText = disp + 3;
  var dispp3 =document.getElementById('p3').innerText;
  document.getElementById('p3').innerText = dispp3 + 3;
}
function four(){
  var disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerText = disp + 4;
  var dispp4 =document.getElementById('p4').innerText;
  document.getElementById('p4').innerText = dispp4 + 4;
}
function five(){
  var disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerText = disp + 5;
  var dispp5 =document.getElementById('p5').innerText;
  document.getElementById('p5').innerText = dispp5 + 5;
}


function plus(){
  num1 = document.getElementById('p1').innerHTML.replace(/0/g, "")
  const disp = document.getElementById("display").innerHTML
  const disp2 = document.getElementById("p1").innerHTML
  document.getElementById('display').innerHTML = disp + "+"


  
  num2 = document.getElementById('p2').innerHTML
  num3 = document.getElementById('p3').innerHTML
  num4 = document.getElementById('p4').innerHTML
  num5 = document.getElementById('p5').innerHTML
  num6 = document.getElementById('p6').innerHTML
  num7 = document.getElementById('p7').innerHTML
  num8 = document.getElementById('p8').innerHTML
  num9 = document.getElementById('p9').innerHTML
  document.getElementById('pl').innerHTML=num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 ;

  document.getElementById("bttn").disabled = true;
  // document.getElementById('p1').innerHTML = disp2 + "plus"
}

function clearee(){
  window.location.reload();
  document.getElementById("display").innerText = "";
  document.getElementById('p1').innerHTML= 0
  document.getElementById('p2').innerHTML= 0
  document.getElementById('p3').innerHTML= 0
  document.getElementById('p4').innerHTML= 0
  document.getElementById('p5').innerHTML= 0
  document.getElementById('p6').innerHTML= 0
  document.getElementById('p7').innerHTML= 0
  document.getElementById('p8').innerHTML= 0
  document.getElementById('p9').innerHTML = 0
  document.getElementById('pl').innerHTML = 0
  document.getElementById("bttn").disabled = false;

}

function equal(){
  const number1 = parseFloat(document.getElementById('p1').innerHTML);
  const number2 = parseFloat(document.getElementById('p2').innerHTML);

  const number5 = parseFloat(document.getElementById('p5').innerHTML);
  document.getElementById("display").innerHTML = number1 + number2 + number5;



}
// fghbthjt
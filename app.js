function onee(){
  var disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerText = disp + 1;
  var dispp1 =document.getElementById('p1').innerText;
  document.getElementById('p1').innerText = dispp1 + 1;
}
function five(){
  var disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerText = disp + 5;
  var dispp5 =document.getElementById('p5').innerText;
  document.getElementById('p5').innerText = dispp5 + 5;
}

function plus(){
  const disp = document.getElementById("display").innerHTML
  const disp2 = document.getElementById("p1").innerHTML
  document.getElementById('display').innerHTML = disp + "+"
  document.getElementById("bttn").disabled = true;
  // document.getElementById('p1').innerHTML = disp2 + "plus"
}

function clearee(){
  document.getElementById("display").innerText = "";
  document.getElementById('p1').innerHTML= 0
  document.getElementById('p5').innerHTML = 0
  document.getElementById("bttn").disabled = false;

}

function equal(){
  const number1 = parseFloat(document.getElementById('p1').innerHTML);
  const number5 = parseFloat(document.getElementById('p5').innerHTML);
  document.getElementById("display").innerHTML = number1 + number5;



}

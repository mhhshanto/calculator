function onee(){
  var disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerText = disp + 1;
  document.getElementById('ppp').innerText = 1;
}
function five(){
  const disp = document.getElementById("display").innerHTML
  document.getElementById('display').innerHTML = disp + 5
}

function plus(){
  const disp = document.getElementById("display").innerHTML
  const disp2 = document.getElementById("ppp").innerHTML
  document.getElementById('display').innerHTML = disp + "+"
  document.getElementById('ppp').innerHTML = disp2 + "plus"
}

function clearee(){
  document.getElementById("display").innerText = "";
}

function equal(){

}
console.log("hi");
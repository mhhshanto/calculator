function onee(){
   var fun = document.getElementById('fun-check').innerHTML;
  if(fun.length == 0 ){
    document.getElementById('display').innerHTML += 1;
  }
  else{
    document.getElementById('display').innerHTML += 1;
    document.getElementById('second-stock').innerHTML += 1;
  }
}
function two(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += 2;
 }
 else{
   document.getElementById('display').innerHTML += 2;
   document.getElementById('second-stock').innerHTML += 2;
 }
}
function three(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += 3;
 }
 else{
   document.getElementById('display').innerHTML += 3;
   document.getElementById('second-stock').innerHTML += 3;
 }
}
function four(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += 4;
 }
 else{
   document.getElementById('display').innerHTML += 4;
   document.getElementById('second-stock').innerHTML += 4;
 }
}

function five(){
  var fun = document.getElementById('fun-check').innerHTML;
  if(fun.length == 0 ){
    document.getElementById('display').innerHTML += 5;
  }
  else{
    document.getElementById('display').innerHTML += 5;
    document.getElementById('second-stock').innerHTML += 5;
  }
}
function six(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += 6;
 }
 else{
   document.getElementById('display').innerHTML += 6;
   document.getElementById('second-stock').innerHTML += 6;
 }
}
function seven(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += 7;
 }
 else{
   document.getElementById('display').innerHTML += 7;
   document.getElementById('second-stock').innerHTML += 7;
 }
}
function eight(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += 8;
 }
 else{
   document.getElementById('display').innerHTML += 8;
   document.getElementById('second-stock').innerHTML += 8;
 }
}
function nine(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += 9;
 }
 else{
   document.getElementById('display').innerHTML += 9;
   document.getElementById('second-stock').innerHTML += 9;
 }
}
function zero(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += 0;
 }
 else{
   document.getElementById('display').innerHTML += 0;
   document.getElementById('second-stock').innerHTML += 0;
 }
}
function decimal(){
  var fun = document.getElementById('fun-check').innerHTML;
 if(fun.length == 0 ){
   document.getElementById('display').innerHTML += ".";
 }
 else{
   document.getElementById('display').innerHTML += ".";
   document.getElementById('second-stock').innerHTML += ".";
 }
}
function plus(){
  var num1 = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML += "+"
  document.getElementById('first-stock').innerHTML = num1
  document.getElementById('fun-check').innerHTML = 0
  document.getElementById("bttn").disabled = true;
}
function minus(){
  var num1 = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML += "-"
  document.getElementById('first-stock').innerHTML = num1
  document.getElementById('fun-check').innerHTML = 1
  document.getElementById("minus-button").disabled = true;
}
function devided(){
  var num1 = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML += "÷"
  document.getElementById('first-stock').innerHTML = num1
  document.getElementById('fun-check').innerHTML = 2
  document.getElementById("devide-button").disabled = true;
}
function multiply(){
  var num1 = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML += "*"
  document.getElementById('first-stock').innerHTML = num1
  document.getElementById('fun-check').innerHTML = 3
  document.getElementById("multi-button").disabled = true;
}


function equal(){
  var fun = document.getElementById('fun-check').innerHTML;
  if(fun == 0){
    var firstStock = parseFloat(document.getElementById('first-stock').innerHTML)
  var secondStock = parseFloat(document.getElementById('second-stock').innerHTML)
  document.getElementById('display').innerHTML = firstStock + secondStock
  }
  else if (fun == 1){
    var firstStock = parseFloat(document.getElementById('first-stock').innerHTML)
  var secondStock = parseFloat(document.getElementById('second-stock').innerHTML)
  document.getElementById('display').innerHTML = firstStock - secondStock
  }
  else if (fun == 2){
    var firstStock = parseFloat(document.getElementById('first-stock').innerHTML)
  var secondStock = parseFloat(document.getElementById('second-stock').innerHTML)
  document.getElementById('display').innerHTML = firstStock / secondStock
  }
  else if (fun == 3){
    var firstStock = parseFloat(document.getElementById('first-stock').innerHTML)
  var secondStock = parseFloat(document.getElementById('second-stock').innerHTML)
  document.getElementById('display').innerHTML = firstStock * secondStock
  }
  var dis = document.getElementById('display').innerHTML;
  document.getElementById('first-stock').innerHTML = dis
  document.getElementById('second-stock').innerHTML = ""
  document.getElementById("multi-button").disabled = false;
  document.getElementById("bttn").disabled = false;
  document.getElementById("devide-button").disabled = false;
  document.getElementById("minus-button").disabled = false;
  
}
function dtl(){
  const text = document.getElementById('display').innerHTML;
document.getElementById('display').innerHTML = text.slice(0, -1)

}

function clearee(){
  window.location.reload();
  document.getElementById("display").innerText = "";
 
}

// done done done fone fonr
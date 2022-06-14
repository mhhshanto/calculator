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

function five(){
  var fun = document.getElementById('fun-check').innerHTML;
  if(fun.length == 0 ){
    document.getElementById('display').innerHTML += 5;
  }
  else{
    document.getElementById('second-stock').innerHTML += 5;
  }
}

function plus(){
  var num1 = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML += "+"
  document.getElementById('first-stock').innerHTML = num1
  document.getElementById('fun-check').innerHTML = 0
}
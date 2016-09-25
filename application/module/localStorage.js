function load(){
  var storedValue =localStorage.getItem('storedValues');
  document.getElementById('container').innerHTML=storedValue;
}

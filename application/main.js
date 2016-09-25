var note = document.getElementById('addNotesForm');
var section = document.getElementById('container');
var container = document.getElementById('container');
var displayForm = document.getElementById('noteAdd');
var currentNode;

require(['main','module/addNotes','module/saveAndEdit','module/editOrDelete'],
  function(load,addingNotes,saveTheform,editOrDelete){

    window.addEventListener('load', load);

    (function load(){
      console.log('does it even work');
      var storedValue =localStorage.getItem('storedValues');
      document.getElementById('container').innerHTML=storedValue;
    })();

});

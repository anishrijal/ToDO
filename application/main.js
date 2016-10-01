var saveButton=document.getElementById('save');
var titleForm = document.getElementById('title');
var note = document.getElementById('addNotesForm');
var section  = document.getElementById('container');
var container = document.getElementById('container');
var displayForm  =  document.getElementById('noteAdd');
var descriptionForm = document.getElementById('description');
var noteCount =0;
var currentNode;

require(['main','module/addNotes','module/saveAndEdit','module/editOrDelete'],
  function(load,addingNotes,saveTheform,editOrDelete){
    window.addEventListener('load', load);
    (function load(){
      var storedValue =localStorage.getItem('storedValues');
      section.innerHTML=storedValue;
    })();
});

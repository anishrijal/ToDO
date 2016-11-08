var saveButton=document.getElementById('save');
var titleForm = document.getElementById('title');
var note = document.getElementById('addNotesForm');
var section  = document.getElementById('container');
var storedValue =localStorage.getItem('storedValues');
var displayForm  =  document.getElementById('noteAdd');
var descriptionForm = document.getElementById('description');

var noteCount =0;
var currentNode;

require(['module/localStorage','module/addANote','module/saveAndEdit','module/editOrDelete', ],
  function(load, addANote){
    window.addEventListener('load', load);
  });

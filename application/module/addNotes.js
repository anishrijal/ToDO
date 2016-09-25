define(function(){
var note = document.getElementById('addNotesForm');
var noteCount =0;

function addingNotes(event){
    note.style.display='block';
    noteCount ++;
    if(noteCount>0){
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
    }
}});

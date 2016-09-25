define(function(){

  var displayForm = document.getElementById('noteAdd');
  displayForm.addEventListener('click', addingNotes);
  var noteCount =0;

  function addingNotes(event){
    note.style.display='block';
    noteCount ++;
    if(noteCount>0){
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
    }

}});

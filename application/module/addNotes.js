define(function(){
  displayForm.addEventListener('click', addingNotes);
  function addingNotes(event){
    note.style.display='block';
    noteCount ++;
    if(noteCount>0){
      titleForm.value = '';
      descriptionForm.value = '';
    }
  }
});

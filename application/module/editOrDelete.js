define(['module/saveAndEdit'], function(){
  container.addEventListener('click', editOrDelete);
  function editOrDelete(event){
    if(event.target.className=='editNotes')
    {
      note.style.display = 'block';
      currentNode = event.target.parentNode;
      titleForm.value=currentNode.childNodes[3].childNodes[1].innerHTML;
      descriptionForm.value=currentNode.childNodes[4].childNodes[1].innerHTML;
      saveButton.innerHTML = 'EDIT';
    }
    else if(event.target.className=='deleteNotes'){
      event.target.parentNode.remove();
      var storeLocal=section.innerHTML;
      localStorage.setItem('storedValues', storeLocal);
    }
  }
});


function editOrDelete(event){

  if(event.target.className=='editNotes')
  {
    note.style.display = 'block';
    currentNode = event.target.parentNode;
    document.getElementById('title').value=currentNode.childNodes[3].childNodes[1].innerHTML;
    document.getElementById('description').value=currentNode.childNodes[4].childNodes[1].innerHTML;
    document.getElementById('save').innerHTML = 'EDIT';
  }
  else if(event.target.className=='deleteNotes'){
    event.target.parentNode.remove();
    var storeLocal=document.getElementById('container').innerHTML;
    localStorage.setItem('storedValues', storeLocal);
  }

}

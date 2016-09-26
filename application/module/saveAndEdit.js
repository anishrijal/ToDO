define(function(){
  var saveButton = document.getElementById('save');
  saveButton.addEventListener('click', saveTheform);

  function saveTheform(event){

    if(saveButton.textContent=='SAVE')
    {
      note.style.display = 'none';

      var allNotesHere = document.createElement('div');
      allNotesHere.setAttribute('class','allNotesSavedHere');

      var button = document.createElement('button');
      button.setAttribute('class', 'editNotes');
      var i =document.createElement('i');
      i.setAttribute('class', 'fa fa-pencil');
      i.setAttribute('aria-hidden','true');
      button.appendChild(i);
      allNotesHere.appendChild(button);

      var button1 = document.createElement('button');
      button1.setAttribute('class', 'deleteNotes');
      var i = document.createElement('i');
      i.setAttribute('class', 'fa fa-trash-o');
      i.setAttribute('aria-hidden','true');
      button1.appendChild(i);
      allNotesHere.appendChild(button1);

      var br=document.createElement('br');
      allNotesHere.appendChild(br);

      var titleNote = document.createElement('div');
      var b = document.createElement('b');
      b.textContent = 'Title: '
      titleNote.appendChild(b);
      var htm = document.createElement('div');
      htm.textContent = document.getElementById('title').value;
      htm.class = 'titleOfTheNote';
      titleNote.appendChild(htm);
      allNotesHere.appendChild(titleNote);

      var descriptionNote = document.createElement('div');
      var b = document.createElement('b');
      b.textContent = 'Description:'
      descriptionNote.appendChild(b);
      var htm = document.createElement('div');
      htm.textContent = document.getElementById('description').value;
      descriptionNote.appendChild(htm);
      allNotesHere.appendChild(descriptionNote);

      var createdDate = document.createElement('div');
        createdDate.innerHTML = '<b>Created Time:</b> ' + Date();
      allNotesHere.appendChild(createdDate);

      var editedDate = document.createElement('div');
      allNotesHere.appendChild(editedDate);
      section.appendChild(allNotesHere);
      container.appendChild(allNotesHere);
      
    }
    else if (saveButton.textContent=='EDIT')
      {
        note.style.display = 'none';
        console.log(currentNode.childNodes[6]);
        currentNode.childNodes[3].childNodes[1].textContent =document.getElementById('title').value;
        currentNode.childNodes[4].childNodes[1].textContent =document.getElementById('description').value;
        currentNode.childNodes[6].innerHTML = '<b>Edited Time:</b> ' + Date();
        currentNode = undefined;
      }
    var storeLocal = document.getElementById('container').innerHTML;
    localStorage.setItem('storedValues', storeLocal);

    document.getElementById('save').innerHTML = 'SAVE';

  }


});

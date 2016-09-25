require(['module/addNotes','module/editOrDelete',
         'module/saveAndEdit','module/localStorage'],
          function(addingNotes,saveTheform,
                    editOrDelete,load){
    var displayForm = document.getElementById('noteAdd');
    var section = document.getElementById('container');
    var saveButton = document.getElementById('save');
    var windowLoad = document.getElementById('load');
    var currentNode;
    displayForm.addEventListener('click', addingNotes);
    saveButton.addEventListener('click', saveTheform);
    section.addEventListener('click', editOrDelete);
    windowLoad.addEventListener('load',load);

})

// define([], function(){
//
//
//   return{
//     addNotes: 'module/addNotes.addingNotes';
//
//   }
// })

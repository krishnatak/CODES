let addToDoButton = document.getElementById('textInput');
let toDoContainer = document.getElementById('taskContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;


    toDoContainer.appendChild(paragraph);

    inputField.value = "";

//this function will delete the task if clicked doubled
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
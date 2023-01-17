var userInput = document.getElementById('taskInput');
var task_plate = document.getElementById('task-plate')

// declare array for task storage
list_storage = [];


// create the function to add task to the storage 
add_.addEventListener('click', () => {
    if (!userInput.value) {
        return null;
    }
    list_storage.push(userInput.value);
    userInput.value = ""

    // this function clears out the page if there is an existing task on the screen , to avoid repitions
    function keyed() {
        if (list_storage.length > 1) {
            task_plate.innerHTML = ""
        }
    }
    keyed();

    // selecion of only the uniques values in the list storage of tasks
    var uniques_ = new Set(list_storage)
    uniques_.forEach(element => {
        var task_list = document.createElement('li');
        task_list.style.color = "white"
        task_list.style.listStyleType = "none"
        task_list.style.width = "173px"
        task_list.style.padding = "5px"
        task_list.style.border = '1px solid white'

        task_list.style.position = "relative";
        // task_list.style.marginLeft = "20px"
        var task_value = document.createTextNode(element);
        task_list.appendChild(task_value)
        task_plate.appendChild(task_list);

    });


});


// edit function to in order to update any task added 
edit_.addEventListener('click', () => {

    var uniques_ = new Set(list_storage)
    uniques_.forEach(element => {
        // create an input box for each task available in the task array
        var edit_box = document.createElement('input');
        edit_box.value = element;
        edit_box.className = "edit_input"
        edit_box.style.display = "block"
        task_plate.appendChild(edit_box)
        // emptying storage momentary , 
        list_storage.length = [];

    });
})

// function for updating all the newly edited task in the task array
update_.addEventListener('click', () => {
    const edit_input = document.getElementsByClassName('edit_input');
    for (var i = 0; i < edit_input.length; i++) {
        list_storage.push(edit_input[i].value);
    }
    // this function clears out the page if there is an existing task on the screen , to avoid repitions
    function keyed() {
        if (list_storage.length > 1) {
            task_plate.innerHTML = ""
        }
    }
    keyed();
    // this function finally update the edited task 
    list_storage.forEach(element => {
        var task_list = document.createElement('li');
        task_list.style.color = "white"
        task_list.style.listStyleType = "none"
        task_list.style.width = "173px"
        task_list.style.padding = "5px"
        task_list.style.border = '1px solid white'
        task_list.style.position = "relative";
     
        var task_value = document.createTextNode(element);
        task_list.appendChild(task_value)
        task_plate.appendChild(task_list);

    });




})


clear.addEventListener('click', () => {
    list_storage.length = 0;
    task_plate.innerHTML = ""
})
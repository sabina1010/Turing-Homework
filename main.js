const textInput = document.getElementById("textInput")
const addButton = document.getElementById("addButton")
const todoContainer = document.getElementById("toDoContainer")


addButton.addEventListener("click", function () {
    if (textInput.value.trim() !== '') {
        const task = document.createElement('div')
        task.classList.add('task');

        const taskText = document.createElement("span")
        taskText.textContent = textInput.value.trim();
        taskText.classList.add('taskText')


        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("deleteIcon")
        deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';


        deleteIcon.addEventListener("click", function () {
            todoContainer.removeChild(task);
        })

        todoContainer.appendChild(task);
        task.appendChild(taskText);
        task.appendChild(deleteIcon);
        textInput.value = '';   
    }
})




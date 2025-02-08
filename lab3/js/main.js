document.addEventListener("DOMContentLoaded", loadTasks);

function newElement() {
    let input = document.getElementById("ToDoLi");
    let inputValue = input.value.trim();
    if (inputValue === "") {
        alert("Введите задачу!");
        return;
    }

    let list = document.getElementById("list");
    let li = document.createElement("li");

    li.innerHTML = `
        <div class="task-container">
            <input type="checkbox" class="task-checkbox" onclick="toggleTask(this)">
            <span class="task-text">${inputValue}</span>
        </div>
        <button class="close" onclick="removeTask(this)">❌</button>
    `;

    list.appendChild(li);
    input.value = "";

    saveTasks();
}

function toggleTask(checkbox) {
    let li = checkbox.closest("li");
    li.classList.toggle("checked", checkbox.checked);
    saveTasks();
}

function removeTask(button) {
    let li = button.closest("li");
    li.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#list li").forEach(li => {
        let text = li.querySelector(".task-text").textContent;
        let completed = li.classList.contains("checked");
        tasks.push({ text, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        JSON.parse(savedTasks).forEach(task => {
            let li = document.createElement("li");
            li.classList.toggle("checked", task.completed);

            li.innerHTML = `
                <div class="task-container">
                    <input type="checkbox" class="task-checkbox" onclick="toggleTask(this)" ${task.completed ? "checked" : ""}>
                    <span class="task-text">${task.text}</span>
                </div>
                <button class="close" onclick="removeTask(this)">❌</button>
            `;

            document.getElementById("list").appendChild(li);
        });
    }
}

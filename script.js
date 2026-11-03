const todoList = document.getElementById("todoList")
const doneList = document.getElementById("doneList")

function onFormSubmit(e) {
    e.preventDefault()
    const input = e.target.querySelector('input[type="text"]')
    const inputValue = input.value.trim()
    const priority = document.getElementById("prioritySelect")

    if (!inputValue) return

    todoList.appendChild(createListItem(inputValue, priority.value))
    input.value = ""
}

function deleteListItem(e) {
    e.target.closest(".list-item").remove()
}

function moveListItem(e) {
    const destination = e.target.checked ? doneList : todoList
    destination.appendChild(e.target.closest(".list-item"))
}

function clearTasks(listId) {
    const taskList = document.getElementById(listId)

    if (taskList.children.length === 0) {
        alert("Tidak ada tugas untuk dihapus.")
        return
    }

    if (confirm("Yakin ingin menghapus semua tugas di kolom ini?")) {
        taskList.replaceChildren()
    }
}

function createListItem(inputValue, priorityValue) {
    const item = document.createElement("div")
    const detail = document.createElement("div")
    detail.className = "list-item-detail"

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.setAttribute("aria-label", `Tandai ${inputValue} selesai`)
    checkbox.addEventListener("change", moveListItem)

    const taskName = document.createElement("span")
    taskName.className = "task-name"
    taskName.textContent = inputValue

    const priority = document.createElement("span")
    priority.className = `priority-badge priority-${priorityValue}`
    priority.textContent = priorityValue.charAt(0).toUpperCase() + priorityValue.slice(1)

    const deleteButton = document.createElement("button")
    deleteButton.type = "button"
    deleteButton.textContent = "X"
    deleteButton.setAttribute("aria-label", `Hapus tugas ${inputValue}`)
    deleteButton.addEventListener("click", deleteListItem)

    detail.append(checkbox, taskName, priority)
    item.append(detail, deleteButton)
    item.className = "list-item"
    return item
}

const now = new Date ();
document.getElementById ("date-time").textContent = now.toLocaleString ();
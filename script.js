document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-white p-2 rounded mt-2';
        
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="text-red-500" onclick="this.parentElement.remove()"> <img src="x-paw-white.png" class="w-8 h-8" alt="" /></button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = '';
    }
});


window.onload = function() {
  loadTasks();
};


document.getElementById('new-task').onclick = function() {
  var task = prompt('Enter a new TO DO:'); 
  if (task && task.trim() !== "") { 
      addTask(task);
      saveTasks(); 
  }
};


function addTask(taskText) {
  var taskDiv = document.createElement('div'); 
  taskDiv.textContent = taskText; 
  taskDiv.onclick = function() {
      var confirmDelete = confirm('Do you want to remove this TO DO?');
      if (confirmDelete) {
          taskDiv.remove(); 
          saveTasks(); 
      }
  };
  var list = document.getElementById('ft_list'); 
  list.insertBefore(taskDiv, list.firstChild); 
}


function saveTasks() {
  var tasks = [];
  var taskDivs = document.getElementById('ft_list').children;
  for (var i = 0; i < taskDivs.length; i++) {
      tasks.push(taskDivs[i].textContent); 
  }
  document.cookie = "tasks=" + JSON.stringify(tasks) + ";path=/"; 
}


function loadTasks() {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith('tasks=')) {
          var tasks = JSON.parse(cookie.substring(6));
          for (var j = 0; j < tasks.length; j++) {
              addTask(tasks[j]); 
          }
      }
  }
}
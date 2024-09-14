$(document).ready(function() {
    loadTasks();

    $('#new-task').click(function() {
        var task = prompt('Enter a new TO DO:');
        if (task && $.trim(task) !== "") {
            addTask(task);
            saveTasks();
        }
    });

    function addTask(taskText) {
        var $taskDiv = $('<div></div>').text(taskText).click(function() {
            if (confirm('Do you want to remove this TO DO?')) {
                $(this).remove();
                saveTasks();
            }
        });
        $('#ft_list').prepend($taskDiv);
    }

    function saveTasks() {
        var tasks = [];
        $('#ft_list > div').each(function() {
            tasks.push($(this).text());
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        $.each(tasks, function(index, task) {
            addTask(task);
        });
    }
});

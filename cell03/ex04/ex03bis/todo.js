$(document).ready(function() {
  // Load TODO from cookies when the page loads
  loadTodosFromCookie()

  // create a new TODO
  $('#newTodo').click(function() {
    const todoText = prompt('Enter a new TO DO:')
    if (todoText && todoText.trim() !== '') {
      addTodo(todoText)
      saveTodosToCookie()
    }
  });

  // add a new TODO to the list
  function addTodo(text) {
    const newTodo = $('<div class="todo-item"></div>').text(text)
    $('#ft_list').append(newTodo) // Change prepend to append

    // Click remove TODO
    newTodo.click(function() {
      const confirmDelete = confirm('Do you really want to delete this TO DO?')
      if (confirmDelete) {
        $(this).remove()
        saveTodosToCookie() // Save the updated list cookies
      }
    })
  }

  // save TODO to cookies
  function saveTodosToCookie() {
    const todoArray = []
    $('#ft_list .todo-item').each(function() {
      todoArray.push($(this).text())
    });
    document.cookie = 'todos=' + JSON.stringify(todoArray) + '; path=/'
  }

  // load TODO from cookies
  function loadTodosFromCookie() {
    const cookieString = document.cookie.split('; ').find(row => row.startsWith('todos='))
    if (cookieString) {
      const todoArray = JSON.parse(cookieString.split('=')[1])
      todoArray.forEach(function(todoText) {
        addTodo(todoText)
      })
    }
  }
})

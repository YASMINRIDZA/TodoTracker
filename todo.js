var form = document.querySelector('form');
    var todoList = document.querySelector('ul');
    var button = document.querySelector('button');
    var input = document.getElementById('user-todo');

    var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    //hold all our todos

    var storage = JSON.parse(localStorage.getItem('todos'))
    //when we refresh/close browser, prev data will be stored in this storage


    form.addEventListener('submit', function(e){
      e.preventDefault();
      todosArray.push(input.value);
      localStorage.setItem('todos', JSON.stringify(todosArray)); //apa2 data sebelum masuk LS, kena convert kpd string dulu
      todoMaker(input.value);
      input.value = '';
    });


    var todoMaker = function(text){
      var todo = document.createElement('li');
      todo.textContent = text;
      todoList.appendChild(todo);
    }

    for(var i=0; i<storage.length; i++){
      todoMaker(storage[i]);
    }

    button.addEventListener('click', function(){
      localStorage.clear();
      todosArray = [];
      while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
      }
    });
